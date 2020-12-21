(function () {
    'use strict';

    angular
        .module('app')
        .factory('paymentService', ['$http', '$q', function ($http, $q) {
            var serviceBase = 'https://localhost:5051';
            var service = {};

            var _paymentDetail = function () {
                return $http.get(serviceBase + '/PaymentDetail/inquiry/0/1000').then(function (results) {
                    return results;
                });
            };
            var _paymentDetailById = function (id) {
                return $http.get(serviceBase + '/PaymentDetail/getById/' + id).then(function (result) {
                    return result;
                });
            };
            var _addPaymentDetail = function (Payment) {
                var request = $http.post(serviceBase + '/PaymentDetail/AddPayment', Payment);
                return request;
            };
            var _deletePaymentDetail = function (id) {
                var request = $http.delete(serviceBase + '/PaymentDetail/' + id);
                return request;
            };
            var _updatePaymentDetail = function (Payment) {
                var request = $http.put(serviceBase + '/PaymentDetail/UpdatePayment/' + Payment.id, Payment);
                return request;
            };

            service.getPaymentDetail = _paymentDetail;
            service.paymentDetailById = _paymentDetailById;
            service.addPaymentDetail = _addPaymentDetail;
            service.deletePaymentDetail = _deletePaymentDetail;
            service.updatePaymentDetail = _updatePaymentDetail;

            return service;
        }]);
})();