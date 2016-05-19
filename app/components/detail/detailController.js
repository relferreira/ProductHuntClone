'use strict';

angular.module('productHunt')
	.controller('DetailCtrl', detailCtrl);

detailCtrl.$inject = ['$stateParams', '$window', 'PostsResource', 'RetryService'];
function detailCtrl($stateParams, $window, PostsResource, RetryService){

	var vm = this;

	vm.post = {};
	vm.back = back;
	vm.loading = true;

	getPostDetail();

	function getPostDetail(){
		vm.loading = true;
		PostsResource.detail({ id : $stateParams.postId }).$promise.then(function(response){
			vm.loading = false;
			vm.post = response.post;
		}).catch(function(err){
			vm.loading = false;
			RetryService.retry().then(function(){
				getPostDetail();
			});
		});
	}

	function back(){
		$window.history.back();
	}
}