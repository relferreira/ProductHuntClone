'use strict';

angular.module('productHunt')
	.directive('phToolbar', toolbarDirective);


function toolbarDirective(){
	return {
		templateUrl: 'shared/toolbar/toolbar.html',
		controller: 'ToolbarCtrl as toolbarVm',
		link: function(scope, elem, attrs, ctrl){
			ctrl.init();
		}
	};
}
