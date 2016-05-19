'use strict';

var app = angular.module('productHunt', [
	'ui.router',
	'ngAnimate',
	'ngMaterial',
	'template',
	'ngResource',
	'ngSanitize'
]);

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$mdThemingProvider'];
function config($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider){
	$httpProvider.interceptors.push('HttpInterceptor');
	$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise('/tech');
	$stateProvider
		.state('home', {
			url: '/:category',
			templateUrl: 'components/home/home.html',
			controller: 'HomeCtrl as homeVm'
		})
		.state('detail', {
			url: '/detail/:postId',
			templateUrl: 'components/detail/detail.html',
			controller: 'DetailCtrl as detailVm'
		});

	$mdThemingProvider.theme('default')
	    .primaryPalette('orange')
	    .accentPalette('grey');
}