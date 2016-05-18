'use strict';

angular.module('productHunt')
	.controller('HomeCtrl', homeCtrl);

homeCtrl.$inject = ['$state', 'ProductResource']
function homeCtrl($state, ProductResource){

	var vm = this;
	var api = ProductResource.listTech;

	vm.listPopularPosts = listPopularPosts;
	vm.listNewestPosts = listNewestPosts;
	vm.selectPost = selectPost;
	vm.loading = true;
	vm.posts = [];

	listPopularPosts();

	function listPopularPosts(){
		api = ProductResource.listTech;
		listPosts();
	}

	function selectPost(post){
		$state.go('detail', { postId: post.id});
	}

	function listNewestPosts(){
		api = ProductResource.listNewest;
		listPosts({ category: 'tech'});
	}

	function listPosts(query){
		vm.loading = true;
		api(query).$promise.then(function(response){
			vm.loading = false;
			vm.posts = response.posts;
		}).catch(function(err){
			vm.loading = false;

		});
	}

}