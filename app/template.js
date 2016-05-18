(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('components/detail/detail.html',
    '<h1>{{detailVm.post}}</h1>');
}]);
})();

(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('components/home/home.html',
    '<div class="home" >\n' +
    '	<div class="home__filters">\n' +
    '		<md-button data-ng-click="homeVm.listPopularPosts()">Popular</md-button>\n' +
    '		<md-button data-ng-click="homeVm.listNewestPosts()">Newer</md-button>\n' +
    '	</div>\n' +
    '	<div class="home__container">\n' +
    '		<md-progress-circular class="home__loading" data-ng-show="homeVm.loading" md-mode="indeterminate"></md-progress-circular>\n' +
    '		<div class="home__card" data-ng-click="homeVm.selectPost(post)" data-ng-repeat="post in homeVm.posts">\n' +
    '			<div class="home__card-image">\n' +
    '				<img data-ng-src="{{post.thumbnail[\'image_url\']}}">\n' +
    '			</div>\n' +
    '			<div class="home__card-content">\n' +
    '				<a href="">\n' +
    '					<span class="home__card-title">{{post.name}}</span>\n' +
    '					<span class="home__card-subtitle">{{post.tagline}}</span>\n' +
    '				</a>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();
