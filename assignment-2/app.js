// Shopping List Check Off assignment
(function() {
'use strict;'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController);
    
    ToBuyController.$inject = ['$scope'];
    function ToBuyController($scope) {

    }

    AlreadyBoughtController.$inject = ['$scope'];
    function AlreadyBoughtController($scope) {

    }

})();