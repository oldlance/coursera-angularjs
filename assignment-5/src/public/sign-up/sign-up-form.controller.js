(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpFormController', SignUpFormController);

    SignUpFormController.$inject = ['SignUpService'];
    function SignUpFormController(SignUpService) {
        var self = this;

        console.log("controller: ", self)

        var signUpInfo = SignUpService.getSignUpState();

        self.signUpInfo = signUpInfo;
        self.isFavouriteDishIdValid = true;
        self.done = false;
        // self.favouriteMenuItem = {};

        self.submit = function() {
            console.log("submit: ", self.signUpInfo);
            self.done = false;
            self.isFavouriteDishIdValid = true;
            self.favouriteMenuItem = {};

            if (!self.signUpInfo.favouriteDishId) {
                console.log("No dish id defined")
                SignUpService.setSignUpState(self.signUpInfo);
                self.done = true;
                return;
            }
        
           // If w've got here the the user entered entered a favourite dish which needs to be checked
            var response = SignUpService.getMenuItemForShortName(self.signUpInfo.favouriteDishId)
            response
                .then(function(response) {
                    console.log("processing response");
                    // self.favouriteMenuItem = response.data
                    self.done = true;
                    self.isFavouriteDishIdValid = true;
                    SignUpService.setSignUpState(self.signUpInfo);
                })
                .catch(function(e) {
                    console.log("Error: menu item does not exist: short_name: ", self.signUpInfo.favouriteDishId);
                    self.isFavouriteDishIdValid = false;
                    self.done=false;
                });

        };        

    }

})();