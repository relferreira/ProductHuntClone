(function(module) {
try { module = angular.module('template'); }
catch(err) { module = angular.module('template', []); }
module.run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('components/home/home.html',
    '<h1 class="home__title">Hello World! {{homeVm.test}}</h1>');
}]);
})();
