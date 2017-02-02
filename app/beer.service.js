(function() {
    'use strict';

    angular
        .module('app')
        .service('beerService', beerService);

    beerService.$inject = ['$http', '$q'];

    /* @ngInject */
    function beerService($http, $q) {
        this.searchBrew = searchBrew;
        this.testName = testName;

        ////////////////

        function searchBrew(searchCity) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://api.brewerydb.com/v2/locations/',
                headers: {
                    Authorization: 'Basic Og==',
                },
                params: {
                    key: 'a82f83d1be9a42d61d6a3b47a2bf1ca4',
                    format: 'json',
                    locality: searchCity
                }
            }).then(function(response) {
                if(typeof response.data == 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('No Data Found');
                }
            }, function(error) {
                defer.reject(error);
            });
            return defer.promise;
        }//close searchBrew

        function testName(name, brewName) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'https://love-calculator.p.mashape.com/getPercentage',
                headers: {
                    'X-Mashape-Key': 'oYgAhb6uBDmshkK6lbrXMhqVuTjZp1AcjMwjsn7funbekPWatT',
                    Accept: 'application/json'
                },
                params: {
                    fname: name,
                    sname: brewName
                }
            }).then(function(response) {
                if(typeof response.data == 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('Not Found');
                }
            }, function(error) {
                defer.reject(error);
            });
                return defer.promise;
        }//close testName
    }
})();