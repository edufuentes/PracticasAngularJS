(function() {

    var app = angular.module('ejemplosApp', []);



    app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

        //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
        $scope.clima = {};
        var json = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}';
        $scope.clima = JSON.parse(json);

        //$http.jsonp('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK&appid=9f50a805aa0089a1edd1829a5db029f0')
        /*      $http.jsonp('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
                  .success(function(data) {

                      $scope.clima = data;


                  });*/

        $scope.kelvinCelcius = function(k) {
            var c = k - 273.15;
            c = Math.round(c * 100) / 100;

            return c;
        };


    }]);





})();