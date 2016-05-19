'use strict';

describe('DetailCtrl', function () {

  	beforeEach(module('productHunt'));

  	var url, $controller, PostsResource, $httpBackend, $rootScope, $stateParams;

  	var posts = [
  		{
  			"category_id": 1,
			"day": "2016-05-17",
			"id": 62854,
			"name": "Bench",
			"product_state": "default",
			"tagline": "Rapid fire meetings to get shit done",
			"comments_count": 124,
			"created_at": "2016-05-17T00:05:16.149-07:00",
			"current_user": {
				"voted_for_post": false,
				"commented_on_post": false
			},
			"discussion_url": "https://www.producthunt.com/tech/bench-4?utm_campaign=producthunt-api&utm_medium=api&utm_source=Application%3A+ProductInterview+%28ID%3A+2795%29",
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
  		},
  		{
  			"category_id": 1,
			"day": null,
			"id": 62855,
			"name": "DailyFramer",
			"product_state": "default",
			"tagline": "Unlock your interaction design genius in 30 days!",
			"comments_count": 2,
			"created_at": "2016-05-17T00:07:14.255-07:00",
			"current_user": {
				"voted_for_post": false,
				"commented_on_post": false
			},
			"discussion_url": "https://www.producthunt.com/tech/dailyframer?utm_campaign=producthunt-api&utm_medium=api&utm_source=Application%3A+ProductInterview+%28ID%3A+2795%29",
			"exclusive": null,
			"featured": false,
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
  	];

  	beforeEach(inject(function(_URL_, _CONFIG_, _PostsResource_, _$rootScope_, _$controller_, _$stateParams_, _$httpBackend_){
		$rootScope = _$rootScope_;
		$controller = _$controller_;
		PostsResource = _PostsResource_;
		$httpBackend = _$httpBackend_;
		$stateParams = _$stateParams_;
		url = _URL_[_CONFIG_.ENV] + '/posts';

	}));

	describe('list posts', function() {
		it('should present post detail for the right post id', function() {

			var id = 62855,
				post = posts.filter(function(e){ return e.id == id; })[0];

			$httpBackend
				.expectGET(url + '/' + id)
				.respond({post: post});

			$stateParams.postId = id;			
			var controller = $controller('DetailCtrl', { PostsResource: PostsResource, $stateParams: $stateParams });

			$httpBackend.flush();			
			expect(controller.loading).toEqual(false);
			expect(controller.post).toEqual(post);

		});

	});
    
});