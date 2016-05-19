'use strict';

angular.module('productHunt')
	.factory('ToolbarService', toolbarService);


function toolbarService(){

	var controller;

	return {
		init: init,
		setTitle: setTitle
	};

	function init(ctrl){
		controller = ctrl;
	}

	function setTitle(title){
		if(controller){
			controller.setTitle(title);
		}
	}
}
