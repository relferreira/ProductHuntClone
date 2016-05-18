'use strict';

angular.module('productHunt')
	.controller('DetailCtrl', detailCtrl);

detailCtrl.$inject = ['$stateParams', 'ProductResource'];
function detailCtrl($stateParams, ProductResource){

	var vm = this;

	vm.post = {};

	getPostDetail();

	function getPostDetail(){
		ProductResource.detail({ id : $stateParams.postId }).$promise.then(function(response){
			vm.post = response.post;
		}).catch(function(err){

		});
	}
}