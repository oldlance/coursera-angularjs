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
            console.log("Setting state eror handlers");
            var cancel = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams, options){
                    console.log("stateChangeStart()");
                // $ctrl.showSpinner = true;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams){
                    console.log("stateChangeSuccess()");
                // $ctrl.showSpinner = false;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error){
                    console.log("stateChangeError()");
                // $ctrl.showSpinner = false;
                });
            cancellers.push(cancel);
            console.log("finshed setting state handlers");
        };

    self.$onDestroy = function () {
        cancellers.forEach(function (item) {
            item();
        });
    };

    }
})();