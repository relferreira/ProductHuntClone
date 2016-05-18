'use strict';

angular.module('productHunt')
	.factory('ProductResource', productResource);

productResource.$inject = ['$resource', 'URL', 'CONFIG'];
function productResource($resource, URL, CONFIG){

	var url = URL[CONFIG.ENV] + '/posts';

	return $resource({}, url, {
		listTech : { method: 'GET', url: url},
		listNewest: { method: 'GET', url: url + '/all'},
		detail: { method: 'GET', url: url + '/:id'}
	});

}