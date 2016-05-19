'use strict';

angular.module('productHunt')
	.factory('RetryService', retryService);

retryService.$inject = ['$mdDialog'];

function retryService($mdDialog){

	return{
		retry: retry
	};

	function retry(){
		var confirm = $mdDialog.confirm()
			.title('Something went wrong!')
			.ok('Try again')
			.cancel('Cancel');

		return $mdDialog.show(confirm);
	}
}