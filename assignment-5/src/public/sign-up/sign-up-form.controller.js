(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpFormController', SignUpFormController);

    SignUpFormController.$inject = ['SignUpService'];
    function SignUpFormController(SignUpService) {
        var self = this;

        var signUpInfo = SignUpService.getSignUpState();

        self.signUpInfo = signUpInfo;
        self.isFavouriteDishIdValid = true;
        self.done = false;

        self.submit = function() {
            self.done = false;
            self.isFavouriteDishIdValid = true;
            self.favouriteMenuItem = {};

            if (!self.signUpInfo.favouriteDishId) {
                SignUpService.setSignUpState(self.signUpInfo);
                self.done = true;
                return;
            }
        
           // If w've got here the the user entered entered a favourite dish which needs to be checked
            var response = SignUpService.getMenuItemForShortName(self.signUpInfo.favouriteDishId)
            response
                .then(function(response) {
                    self.done = true;
                    self.isFavouriteDishIdValid = true;
                    SignUpService.setSignUpState(self.signUpInfo);
                })
                .catch(function(e) {
                    self.isFavouriteDishIdValid = false;
                    self.done=false;
                });

        };        

    }

})();