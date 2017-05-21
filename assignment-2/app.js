// Shopping List Check Off assignment
(function() {
'use strict;'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(checkOffService) {
        var toBuy = this;        

        toBuy.items = checkOffService.getToBuyItems();

        toBuy.buyItem = function(itemIndex) {
            checkOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(checkOffService) {
        var alreadyBought = this;
        alreadyBought.items = checkOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
                {item: "Chops", quantity: 6},
                {item: "Shallots", quantity: 12 },
                {item: "bulb of Garlic", quantity: 1 },
                {item: "sprig of Thyme", quantity: 1},
                {item: "small jar f Capers", quantity: 1 },
                {item: "head of Brocolli", quantity: 1 },
                {item: "New Potatoes", quantity: 12 },
                {item: "bottle of White Wine", quantity: 1}
                ];

        var alreadyBoughtItems = [];

        service.getToBuyItems = function() {
            return toBuyItems;
        }        

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        }        
        
        // Move a bought item from toBuy to alreadyBought
        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];
            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        }
    }

})();