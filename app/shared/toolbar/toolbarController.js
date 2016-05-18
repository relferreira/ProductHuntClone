'use strict';

angular.module('productHunt')
	.controller('ToolbarCtrl', toolbarCtrl);


toolbarCtrl.$inject = ['$mdSidenav'];
function toolbarCtrl($mdSidenav){

	var vm = this;

	this.openDrawer = openDrawer;

	function openDrawer(){
		$mdSidenav('menu-drawer').open();
	}
}