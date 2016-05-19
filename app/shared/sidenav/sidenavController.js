'use strict';

angular.module('productHunt')
	.controller('SidenavCtrl', sidenavCtrl);

sidenavCtrl.$inject = ['$mdSidenav'];
function sidenavCtrl($mdSidenav){

	var vm = this;

	vm.close = close;

	function close(){
		$mdSidenav('menu-drawer').close();
	}
}
