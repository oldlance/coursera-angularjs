(function() {
'use strict'

angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');


MenuDataService.$inject = ['$http', 'ApiBaseUrl'];
function MenuDataService($http, ApiBaseUrl) {
    var service = this;

    service.getAllCategories = function() {
        return $http(
            {
              method: 'GET',
              url: (ApiBaseUrl + '/categories.json')
            }).then(function(response) {
                return response.data;
            }).catch(function(response) {
                console.error("Error in getAllCategories(): ", response);
            });
    };

    service.getItemsForCategory = function(categoryShortName) {
        return $http(
            {
                method: 'GET',
                url: (ApiBaseUrl + '/menu_items.json'),
                params: { category: categoryShortName}
            }).then(function(response) {
                return response.data;
            }).catch(function(response) {
                console.error("Error in getItemsForCateory(): ", response);
            });
    }
};

})();