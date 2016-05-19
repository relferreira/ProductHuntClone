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
    '			<a class="detail__cover-text" href="{{::detailVm.post[\'redirect_url\']}}" target="_blank">\n' +
    '				<h1 class="detail__title">{{::detailVm.post.name}}</h1>\n' +
    '				<p>{{::detailVm.post.tagline}}</p>\n' +
    '			</a>\n' +
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
    '						<p class="detail__comment-author"><b>{{::comment.user.name}}</b> - {{::comment.user.headline}}</p>\n' +
    '						<p data-ng-bind-html="comment.body"></p>\n' +
    '						<div class="detail__child-comment" data-ng-repeat="childComment in comment[\'child_comments\'] track by childComment.id">\n' +
    '							<div class="detail__comment-image">\n' +
    '								<img data-ng-src="{{childComment.user[\'image_url\'][\'original\']}}/?auto=format&w=9&h=9&q=5&fit=crop&blur=5">\n' +
    '							</div>\n' +
    '							<div class="detail__comment-text">\n' +
    '								<p class="detail__comment-author"><b>{{::childComment.user.name}}</b> - {{::childComment.user.headline}}</p>\n' +
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
    '		<ph-filter first-label="\'Popular\'" second-label="\'Newer\'" selected="0" first-selected="homeVm.listPopularPosts()" second-selected="homeVm.listNewestPosts()"></ph-filter>\n' +
    '	</div>\n' +
    '	<div class="home__container">\n' +
    '		<div class="home__card" data-ng-click="homeVm.selectPost(post)" data-ng-repeat="post in homeVm.posts">\n' +
    '			<div class="home__card-image">\n' +
    '				<img data-ng-src="{{::post.thumbnail[\'image_url\']}}">\n' +
    '			</div>\n' +
    '			<div class="home__card-content">\n' +
    '				<a href="">\n' +
    '					<span class="home__card-title">{{::post.name}}</span>\n' +
    '					<span class="home__card-subtitle">{{::post.tagline}}</span>\n' +
    '				</a>\n' +
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
  $templateCache.put('shared/filter/filter.html',
    '<md-button class="filter" data-ng-click="onSelect(0)" data-ng-class="{\'filter--selected\': selected === 0}">{{firstLabel}}</md-button>\n' +
    '<md-button class="filter" data-ng-click="onSelect(1)"  data-ng-class="{\'filter--selected\': selected === 1}">{{secondLabel}}</md-button>');
}]);
})();

(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('shared/sidenav/sidenav.html',
    '<md-sidenav class="sidenav md-sidenav-left md-whiteframe-z2" md-component-id="menu-drawer" md-is-locked-open="$mdMedia(\'gt-xs\')">\n' +
    '    <header class="sidenav__header">\n' +
    '        <img src="images/product-hunt-logo-vertical-orange.png">\n' +
    '    </header>\n' +
    '    <md-content>\n' +
    '        <ul>\n' +
    '            <h3 class="sidenav__menu-title">Categories</h3>\n' +
    '            <li>\n' +
    '                <a class="sidenav__link md-button md-ink-ripple" ui-sref="home({category: \'tech\'})" ui-sref-active="sidenav__link--selected" data-ng-click="sidenavVm.close()">\n' +
    '                    Tech\n' +
    '                    <div class="md-ripple-container"></div>\n' +
    '                </a>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <a class="sidenav__link md-button md-ink-ripple" ui-sref="home({category: \'games\'})" ui-sref-active="sidenav__link--selected" data-ng-click="sidenavVm.close()">\n' +
    '                    Games\n' +
    '                    <div class="md-ripple-container"></div>\n' +
    '                </a>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <a class="sidenav__link md-button md-ink-ripple" ui-sref="home({category: \'books\'})"  ui-sref-active="sidenav__link--selected"  data-ng-click="sidenavVm.close()">\n' +
    '                    Books\n' +
    '                    <div class="md-ripple-container"></div>\n' +
    '                </a>\n' +
    '            </li>\n' +
    '            <li>\n' +
    '                <a class="sidenav__link md-button md-ink-ripple" ui-sref="home({category: \'podcasts \'})"  ui-sref-active="sidenav__link--selected"  data-ng-click="sidenavVm.close()">\n' +
    '                    Podcasts\n' +
    '                    <div class="md-ripple-container"></div>\n' +
    '                </a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </md-content>\n' +
    '</md-sidenav>');
}]);
})();

(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('shared/toolbar/toolbar.html',
    '<md-toolbar>\n' +
    '    <div class="toolbar md-toolbar-tools">\n' +
    '        <md-button class="toolbar__menu-icon md-icon-button" data-ng-click="toolbarVm.openDrawer()" aria-label="Menu" hide-gt-xs>\n' +
    '            <md-icon class="toolbar__menu-icon">menu</md-icon>\n' +
    '        </md-button>\n' +
    '        <h2>\n' +
    '            <span>{{toolbarVm.title}}</span>\n' +
    '        </h2>\n' +
    '        <span flex></span>\n' +
    '        <md-menu md-position-mode="target-right target">\n' +
    '            <md-button class="md-icon-button" ng-click="toolbarVm.openOverflowMenu($mdOpenMenu, $event)">\n' +
    '                <md-icon md-menu-origin>account_circle</md-icon>\n' +
    '            </md-button>\n' +
    '            <md-menu-content width="4">\n' +
    '                <md-menu-item>\n' +
    '                    <md-button ng-click="ctrl.redial($event)">Login</md-button>\n' +
    '                </md-menu-item>\n' +
    '            </md-menu-content>\n' +
    '        </md-menu>\n' +
    '    </div>\n' +
    '</md-toolbar>');
}]);
})();
