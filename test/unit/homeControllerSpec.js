'use strict';

describe('HomeCtrl', function () {

  	beforeEach(module('productHunt'));

  	var url, $controller,ToolbarService, PostsResource, $httpBackend, $rootScope, $stateParams;

  	var techPosts = { posts: [
  		{
			"category_id": 1,
			"day": "2016-05-19",
			"id": 63239,
			"name": "Product Hunt Shop",
			"product_state": "default",
			"tagline": "Buy cool things you discover on Product Hunt 😄 📦",
			"comments_count": 124,
			"created_at": "2016-05-19T05:59:31.175-07:00",
			"current_user": {
				"voted_for_post": false,
				"commented_on_post": false
			},
			"discussion_url": "https://www.producthunt.com/tech/product-hunt-shop?utm_campaign=producthunt-api&utm_medium=api&utm_source=Application%3A+ProductInterview+%28ID%3A+2795%29",
			"exclusive": null,
			"featured": true,
			"maker_inside": true,
			"makers": [],
			"plataforms": [],
			"topics": [],
			"redirect_url": "",
			"screenshot_url":"",
			"thumbnail": {},
			"user": {},
			"votes_count": 10
  		}
  	]};

  	var techNewestPosts = { posts: [
  		{
			"category_id": 1,
			"day": "2016-05-19",
			"id": 63289,
			"name": "Notion",
			"product_state": "default",
			"tagline": "Increase your team intelligence",
			"comments_count": 9,
			"created_at": "2016-05-19T09:20:25.597-07:00",
			"current_user": {
			"voted_for_post": false,
			"commented_on_post": false
			},
			"discussion_url": "https://www.producthunt.com/tech/notion-9?utm_campaign=producthunt-api&utm_medium=api&utm_source=Application%3A+ProductInterview+%28ID%3A+2795%29",
			"exclusive": null,
			"featured": true,
			"maker_inside": true,
			"makers": [],
			"plataforms": [],
			"topics": [],
			"redirect_url": "",
			"screenshot_url":"",
			"thumbnail": {},
			"user": {},
			"votes_count": 10
  		}
  	]};

  	var gamesPosts = { posts: [
  		{
			"category_id": 2,
			"day": "2016-05-19",
			"id": 63217,
			"name": "Diamond Target",
			"product_state": "default",
			"tagline": "Develop your mind and concentration",
			"comments_count": 0,
			"created_at": "2016-05-19T01:34:26.783-07:00",
			"current_user": {
			"voted_for_post": false,
			"commented_on_post": false
			},
			"discussion_url": "https://www.producthunt.com/games/diamond-target?utm_campaign=producthunt-api&utm_medium=api&utm_source=Application%3A+ProductInterview+%28ID%3A+2795%29",
			"exclusive": null,
			"featured": true,
			"maker_inside": false,
			"makers": [],
			"plataforms": [],
			"topics": [],
			"redirect_url": "",
			"screenshot_url":"",
			"thumbnail": {},
			"user": {},
			"votes_count": 10
  		}
  	]};

  	beforeEach(inject(function(_URL_, _CONFIG_, _PostsResource_, _ToolbarService_, _$rootScope_, _$controller_, _$stateParams_, _$httpBackend_){
		$rootScope = _$rootScope_;
		$controller = _$controller_;
		PostsResource = _PostsResource_;
		ToolbarService =_ToolbarService_;
		$httpBackend = _$httpBackend_;
		$stateParams = _$stateParams_;
		url = _URL_[_CONFIG_.ENV] + '/posts';

	}));

	describe('list posts', function() {
		it('should list tech category', function() {

			$httpBackend
				.expectGET(url + '?search%5Bcategory%5D=tech')
				.respond(techPosts);

			$stateParams.category = 'tech';			
			var controller = $controller('HomeCtrl', { PostsResource: PostsResource, $stateParams: $stateParams, ToolbarService: ToolbarService });

			expect(controller.category).toEqual($stateParams.category);

			$httpBackend.flush();			
			expect(controller.loading).toEqual(false);
			expect(controller.posts).toEqual(techPosts.posts);

		});

		it('should list games category', function() {

			$httpBackend
				.expectGET(url + '?search%5Bcategory%5D=games')
				.respond(gamesPosts);

			$stateParams.category = 'games';			
			var controller = $controller('HomeCtrl', { PostsResource: PostsResource, $stateParams: $stateParams });

			expect(controller.category).toEqual($stateParams.category);

			$httpBackend.flush();			
			expect(controller.loading).toEqual(false);
			expect(controller.posts).toEqual(gamesPosts.posts);

		});

		it('should list newest by category', function(){
			$httpBackend
				.expectGET(url + '?search%5Bcategory%5D=tech')
				.respond(techPosts);

			$httpBackend
				.expectGET(url + '/all?search%5Bcategory%5D=tech')
				.respond(techNewestPosts);

			$stateParams.category = 'tech';			
			var controller = $controller('HomeCtrl', { PostsResource: PostsResource, $stateParams: $stateParams });

			controller.listNewestPosts();
			$httpBackend.flush();

			expect(controller.posts).toEqual(techNewestPosts.posts);
		});
	});
    
});