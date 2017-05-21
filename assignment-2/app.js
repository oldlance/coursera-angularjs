// Shopping List Check Off assignment
(function() {
'use strict;'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService); // singleton service
    
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

    // Singleton function constructor that is injected into controllers that
    // need access to the shopping checkoff functionality.
    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
                {name: "Chops", quantity: 6},
                {name: "Shallots", quantity: 12 },
                {name: "bulb of Garlic", quantity: 1 },
                {name: "sprig of Thyme", quantity: 1},
                {name: "small jar of Capers", quantity: 1 },
                {name: "head of Brocolli", quantity: 1 },
                {name: "New Potatoes", quantity: 12 },
                {name: "bottle of White Wine", quantity: 1}
                ];

        var alreadyBoughtItems = [];

        service.getToBuyItems = function() {
            return toBuyItems;
        }        

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        }        
        
        // Move a bought item from toBuy to alreadyBought
        // TODO: add some error handling  
        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];
            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        }
    }

})();