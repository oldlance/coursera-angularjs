(function() {
    'use strict';

    angular.module('public')
     .controller('MyInfoController', MyInfoController);


    MyInfoController.$inject = ['SignUpService','ApiPath'];
    function MyInfoController(SignUpService, ApiPath) {
        var self = this;

        self.myInfo = SignUpService.getSignUpState();
        self.favouriteDish = {};
        self.basePath = ApiPath;

        self.hasData =  function() {
                if (self.myInfo.firstName.trim() != "") {
                    return true;
                } else {
                    return false;
                }
        };

        self.hasFavouriteDishId = function() {
            if (self.myInfo.favouriteDishId != "")
                return true;
            else
                return false;
        };


        if (self.myInfo.favouriteDishId != "") {
           getFavouriteDish(); 
        }

        function getFavouriteDish() {
            var response = SignUpService.getMenuItemForShortName(self.myInfo.favouriteDishId)
            response
            .then(function (response) {
                self.favouriteDish = response.data;
            })
            .catch(function(e){
                console.log("Error: menu item does not exist: ", e);
            });

        };   

    }


})();