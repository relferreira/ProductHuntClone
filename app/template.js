(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('components/detail/detail.html',
    '<div class="detail">\n' +
    '	<div class="detail__container">\n' +
    '		<div class="detail__cover">\n' +
    '			<md-icon class="detail__cover-close" data-ng-click="detailVm.back()">close</md-icon>\n' +
    '			<img class="detail__cover-image" data-ng-src="{{detailVm.post.thumbnail[\'image_url\']}}">\n' +
    '			<div class="detail__cover-filter"></div>\n' +
    '			<div class="detail__cover-text">\n' +
    '				<h1 class="detail__title">{{detailVm.post.name}}</h1>\n' +
    '				<p>{{detailVm.post.tagline}}</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="detail__discussion">\n' +
    '			<div class="detail__discussion-title">\n' +
    '				<h2>Discussion</h2>\n' +
    '				<md-progress-circular class="detail__loading" data-ng-show="detailVm.loading" md-mode="indeterminate"></md-progress-circular>\n' +
    '			</div>\n' +
    '			<div class="detail__comments">\n' +
    '				<div class="detail__comment" data-ng-repeat="comment in detailVm.post.comments track by comment.id">\n' +
    '					<div class="detail__comment-image">\n' +
    '						<img data-ng-src="{{comment.user[\'image_url\'][\'original\']}}/?auto=format&w=9&h=9&q=5&fit=crop&blur=5">\n' +
    '					</div>\n' +
    '					<div class="detail__comment-text">\n' +
    '						<p class="detail__comment-author"><b>{{comment.user.name}}</b> - {{comment.user.headline}}</p>\n' +
    '						<p data-ng-bind-html="comment.body"></p>\n' +
    '						<div class="detail__child-comment" data-ng-repeat="childComment in comment[\'child_comments\'] track by childComment.id">\n' +
    '							<div class="detail__comment-image">\n' +
    '								<img data-ng-src="{{childComment.user[\'image_url\'][\'original\']}}/?auto=format&w=9&h=9&q=5&fit=crop&blur=5">\n' +
    '							</div>\n' +
    '							<div class="detail__comment-text">\n' +
    '								<p class="detail__comment-author"><b>{{childComment.user.name}}</b> - {{childComment.user.headline}}</p>\n' +
    '								<p data-ng-bind-html="childComment.body"></p>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('components/home/home.html',
    '<div class="home" >\n' +
    '	<div class="home__header">\n' +
    '		<md-progress-circular class="home__loading" data-ng-show="homeVm.loading" md-mode="indeterminate"></md-progress-circular>\n' +
    '		<md-button data-ng-click="homeVm.listPopularPosts()">Popular</md-button>\n' +
    '		<md-button data-ng-click="homeVm.listNewestPosts()">Newer</md-button>\n' +
    '	</div>\n' +
    '	<div class="home__container">\n' +
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
