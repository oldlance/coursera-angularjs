(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        console.log("IN RoutesConfig() ...");
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
                        console.log("In categoryList state resolver");
                        return MenuDataService.getAllCategories();
                    }]
                },
                controller: 'MainCategoriesController as mainList'
            })
            .state('categoryList.items', {
                url: '/items',
                templateUrl: 'src/templates/items.template.html',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        console.log("In categoryList.items state resolver ...");
                        return MenuDataService.getItemsForCategory($stateParams.category.short_name);
                    }]
                },
                params: {
                    category: null
                },
                controller: 'ItemsController as childList'
            });
    }


})();