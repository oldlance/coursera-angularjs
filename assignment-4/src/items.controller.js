(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams', 'items'];
    function ItemsController($stateParams, items) {
        var self = this;
        var category = items.category;

        console.log("ItemsController items: ", items);
        self.categoryName = category.name;
        self.specialInstructions = category.special_instructions;
        self.items = items.menu_items;
    }
})();