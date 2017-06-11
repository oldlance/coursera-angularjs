(function (){
    "use strict";

    angular.module('public')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['ApiPath', '$http'];
    function SignUpService(ApiPath, $http) {
        var service = this;

        var signUpState =
        {
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            favouriteDishId: '' 
        };

        service.getSignUpState = function () {
            return signUpState;
       };

       service.setSignUpState = function (state) {
           signUpState = Object.assign({}, state);
       };

       service.getMenuItemForShortName = function(shortName) {
           return $http.get(ApiPath + '/menu_items/' + shortName + '.json');
       }

    }


})();