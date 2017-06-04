(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page is unrecognised route encountered
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })
            .state('categoryList', {
                url: '/category-list',
                templateUrl: 'src/templates/main-categories.template.html',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                },
                controller: 'MainCategoriesController as mainList'
            })
            .state('categoryList.items', {
                url: '/category/{categoryId}',
                templateUrl: 'src/templates/items.template.html',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                    }]
                },
                controller: 'ItemsController as childList'
            });
    }


})();