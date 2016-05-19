'use strict';

angular.module('productHunt')
	.directive('phFilter', phFilter);


function phFilter(){
	return {
		templateUrl: 'shared/filter/filter.html',
		scope: {
			firstSelected: '&',
			secondSelected: '&',
			selected: '=',
			firstLabel: '=',
			secondLabel: '='
		},
		link: function(scope){
			scope.onSelect = function(index){
				scope.selected = index;
				if(index === 0){
					scope.firstSelected();
				} else {
					scope.secondSelected();
				}
			};
		}
	};
}
