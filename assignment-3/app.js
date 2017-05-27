(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(menuSearch) {
    var self = this;

    self.searchTerm = "";
    self.found = [];

    this.doSearch = function() {
        menuSearch.getMatchedMenuItems(self.searchTerm).then(function (result){
            self.found = result
        }).catch(function(result){ console.log("An error occurred: ", result)}) 
    }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
        var response = $http(
            {
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }
        ).then(function(result) {
            var items = result.data.menu_items;
            var filteredItems = [];
            var i;
            for (i = 0; i < items.length; i++ ) {
                if (isInString(items[i].description, searchTerm)) {
                    console.log("match: ", items[i].description)
                    filteredItems.push(items[i]);
                }
            }
            return filteredItems
        })
        return response
    }

}

function isInString(toSearch, term) {
 var retval = false
 if (toSearch !== undefined && term !== undefined) {
   var cleanToSearch = toSearch.trim().toLowerCase()
   var cleanTerm = term.trim().toLowerCase()
   retval = cleanToSearch.includes(term)  
 }
 return retval
}

})()