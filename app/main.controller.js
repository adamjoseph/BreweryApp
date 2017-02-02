(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['beerService'];

    /* @ngInject */
    function mainController(beerService) {
        var vm = this;
        vm.title = 'mainController';


        ////////////////

        

        // initMap = function() {
        // var usa = {lat: 39.50, lng: -98.35};
        // var map = new google.maps.Map(document.getElementById('map'), {
        //   zoom: 4,
        //   center: usa
        // })};
      

        vm.searchBrew = function(searchCity) {
            beerService.searchBrew(searchCity).then(
                function(response){
                    vm.breweries = response.data.data;
                })


                //   var marker = new google.maps.Marker({
                //     position: uluru,
                //     map: map
                //   });
        }//close searchBrew

        vm.testMatch = function(name, brewName) {
            beerService.testName(name, brewName).then(
                function(response) {
                    vm.result = response.data;
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                    //vm.name = '';
                })
        }//close testMatch
    }
})();