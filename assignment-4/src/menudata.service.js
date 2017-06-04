(function() {
'use strict'

angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');


MenuDataService.$inject = ['$http', 'ApiBaseUrl'];
function MenuDataService($http, ApiBaseUrl) {
    var service = this;
    console.log("In MenuDataService() ")

    service.getAllCategories = function() {
        console.log("In getAllCategories()", ApiBaseUrl);
        return $http(
            {
              method: 'GET',
              url: (ApiBaseUrl + '/categories.json')
            }).then(function(response) {
                console.log("getAllCategories Response is: ", response);
                return response.data;
            }).catch(function(response) {
                console.log("Error in getAllCategories(): ", response);
            });
    };

    service.getItemsForCategory = function(categoryShortName) {
        console.log("In getItemsForCategory()", categoryShortName, ApiBaseUrl);
        return $http(
            {
                method: 'GET',
                url: (ApiBaseUrl + '/menu_items.json'),
                params: { category: categoryShortName}
            }).then(function(response) {
                console.log("getItemsForCategory Response is: ", response);
                return response.data.menu_items;
            }).catch(function(response) {
                console.log("Error in getItemsForCateory(): ", response);
            });
    }
};

})();