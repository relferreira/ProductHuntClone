'use strict';

angular.module('productHunt')
	.directive('phSidenav', phSidenav);


function phSidenav(){

	return {
		templateUrl: 'shared/sidenav/sidenav.html',
		controller: 'SidenavCtrl as sidenavVm'
	};
}
