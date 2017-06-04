(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams', 'items'];
    function ItemsController($stateParams, items) {
        var self = this;
        var category = $stateParams.category;

        self.categoryName = category.name;
        self.specialInstructions = category.special_instructions;
        self.items = items;
    }
})();