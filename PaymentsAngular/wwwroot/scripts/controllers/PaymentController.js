(function () {
    'use strict';

    angular
        .module('app')
        .controller('PaymentController', ['$scope', 'paymentService', function ($scope, paymentService) {
            $scope.Payments = {
                totalPages: 0,
                page: 0,
                data: []
            };
            $scope.Payment = {
                id:'',
                ownerName: '',
                cardNumber: '0',
                expirationDate: '',
                cvv: ''
            };
            getData();
            function getData() {
                paymentService.getPaymentDetail().then(function (result) {
                    $scope.Payments = result.data;
                })
            };
            $scope.deletedData = function (id) {
                paymentService.deletePaymentDetail(id).then(function () {
                    window.location.reload();
                }, function (err) {
                    console.log('err', err)
                })
            }
        }])
        .controller('AddPaymentController', ['$scope', '$location', 'paymentService', function ($scope, $location, paymentService) {
            $scope.createPayment = function () {
                paymentService.addPaymentDetail($scope.Payment).then(function () {
                    $location.path('/');
                }, function () {
                    console.log('error')
                });
            };
        }])
        .controller('UpdatePaymentController', ['$scope', '$routeParams', '$location', 'paymentService', function ($scope, $routeParams, $location, paymentService) {
            paymentService.paymentDetailById($routeParams.id).then(function (result) {
                $scope.Payment = result.data;
            }, function () {
                console.log("errorrrrrrrr")
                })
            $scope.updatePayment = function (Payment) {
                paymentService.updatePaymentDetail(Payment).then(function () {
                    $location.path('/');
                }, function () {
                    console.log('error')
                });
            };
        }])
})();
