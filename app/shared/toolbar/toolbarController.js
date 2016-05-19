'use strict';

angular.module('productHunt')
	.controller('ToolbarCtrl', toolbarCtrl);


toolbarCtrl.$inject = ['$mdSidenav', '$mdDialog'];
function toolbarCtrl($mdSidenav, $mdDialog){

	var vm = this;

	vm.openDrawer = openDrawer;
	vm.openOverflowMenu = openOverflowMenu;

	function openDrawer(){
		$mdSidenav('menu-drawer').open();
	}

	function openOverflowMenu($mdOpenMenu, ev){
		$mdOpenMenu(ev);
	}
}