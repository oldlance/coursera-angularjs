(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://oldlance-angularjs.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
