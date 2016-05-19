'use strict';

angular.module('productHunt')
	.controller('HomeCtrl', homeCtrl);

homeCtrl.$inject = ['$state', '$stateParams', 'PostsResource', 'RetryService', 'ToolbarService'];
function homeCtrl($state, $stateParams, PostsResource, RetryService, ToolbarService){

	var vm = this;
	var api = PostsResource.listAll;

	vm.listPopularPosts = listPopularPosts;
	vm.listNewestPosts = listNewestPosts;
	vm.selectPost = selectPost;
	vm.category = $stateParams.category;
	vm.loading = true;
	vm.posts = [];

	listPopularPosts();

	function listPopularPosts(){
		api = PostsResource.listAll;
		listPosts();
	}

	function selectPost(post){
		$state.go('detail', { postId: post.id});
	}

	function listNewestPosts(){
		api = PostsResource.listNewest;
		listPosts();
	}

	function listPosts(){
		vm.loading = true;
		api({ 'search[category]': vm.category}).$promise.then(function(response){
			vm.loading = false;
			vm.posts = response.posts;
			ToolbarService.setTitle(vm.category.toUpperCase());
		}).catch(function(err){
			vm.loading = false;
			RetryService.retry().then(function(){
				listPosts();
			});
		});
	}

}
