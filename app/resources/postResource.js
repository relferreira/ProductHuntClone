'use strict';

angular.module('productHunt')
	.factory('PostsResource', postsResource);

postsResource.$inject = ['$resource', 'URL', 'CONFIG'];
function postsResource($resource, URL, CONFIG){

	var url = URL[CONFIG.ENV] + '/posts';

	return $resource({}, url, {
		listAll: { method: 'GET', url: url},
		listNewest: { method: 'GET', url: url + '/all'},
		detail: { method: 'GET', url: url + '/:id'}
	});

}
