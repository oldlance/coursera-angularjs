(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('MainCategoriesController', MainCategoriesController);

    MainCategoriesController.$inject = ['$rootScope', 'categories'];
    function MainCategoriesController($rootScope, categories) {
        var  self = this;
        var cancellers = [];

        self.categories = categories;

        self.$onInit = function () {
            var cancel = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams, options){
                    self.showSpinner = true;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams){
                    self.showSpinner = false;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error){
                    self.showSpinner = false;
                });
            cancellers.push(cancel);
        };

    self.$onDestroy = function () {
        cancellers.forEach(function (item) {
            item();
        });
    };

    }
})();