(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var self = this;
        var category = items.category;

        self.categoryName = category.name;
        self.specialInstructions = category.special_instructions;
        self.items = items.menu_items;
    }
})();