(function() {
    'use strict';

    angular.module('common')
        .component('signUpForm', {
            templateUrl: 'src/public/sign-up/sign-up-form.html',
            controller: 'SignUpFormController',
            controllerAs: 'signUpForm'
        });
})();