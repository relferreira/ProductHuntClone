'use strict';

var app = angular.module('productHunt', [
	'ui.router',
	'ngAnimate',
	'ngMaterial',
	'template',
	'ngResource'
]);

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
function config($stateProvider, $urlRouterProvider, $httpProvider){
	$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'components/home/home.html',
			controller: 'HomeCtrl as homeVM'
		});
}