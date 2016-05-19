'use strict';

angular.module('productHunt')
	.factory('HttpInterceptor', httpInterceptor);


httpInterceptor.$inject = ['CONFIG'];

function httpInterceptor(CONFIG){
	return {
		request: request
	};

	function request(config){
		config.headers.Authorization = 'Bearer ' + CONFIG.KEY;
		return config;
	}
}
