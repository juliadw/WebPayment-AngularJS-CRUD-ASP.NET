(function () {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider
                .when('/', {
                    controller: 'PaymentController',
                    templateUrl: '/scripts/views/payment/payment.html'
                })
                .when('/addPayment', {
                    controller: 'AddPaymentController',
                    templateUrl: '/scripts/views/payment/addPayment.html'
                })
                .when('/updatePayment/:id', {
                    controller: 'UpdatePaymentController',
                    templateUrl: '/scripts/views/payment/updatePayment.html'
                })
                .otherwise({ redirectTo: '/' });
        }]);
})();