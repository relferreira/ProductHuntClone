'use strict';

angular.module('productHunt')
	.controller('ToolbarCtrl', toolbarCtrl);


toolbarCtrl.$inject = ['$mdSidenav', '$mdDialog', 'ToolbarService'];
function toolbarCtrl($mdSidenav, $mdDialog, ToolbarService){

	var vm = this;

	vm.title = 'Product Hunt';
	vm.openDrawer = openDrawer;
	vm.openOverflowMenu = openOverflowMenu;
	vm.setTitle = setTitle;
	vm.init = init;

	function init(){
		ToolbarService.init(vm);
	}

	function setTitle(title){
		vm.title = title;
	}

	function openDrawer(){
		$mdSidenav('menu-drawer').open();
	}

	function openOverflowMenu($mdOpenMenu, ev){
		$mdOpenMenu(ev);
	}
}
