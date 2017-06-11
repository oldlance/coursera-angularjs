(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          console.log("in public.menu resolve");
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.signup', {
      url: '/menu/signup',
      templateUrl: 'src/public/sign-up/sign-up-form.html',
      controller: 'SignUpFormController',
      controllerAs: 'signUpCtrl'
      // resolve: {
        // signUpInfo: ['SignUpService', function(SignUpService) {
          // console.log("in public.signup resolve");
          // return SignUpService.signUpInfo;
        //  }]
      // }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          console.log("in public.menuitems resolve");
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
