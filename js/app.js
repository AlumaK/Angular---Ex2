(function() {
    var app = angular.module('myApp', ['ngRoute']);
    
    app.controller('pensController', function($scope) {
        $scope.img = 'images/pen.jpg';
    });
    app.controller('notebooksController', function($scope) {
        $scope.img = 'images/notebooks.jpg';
    });
    app.controller('scissorsController', function($scope) {
        $scope.img = 'images/scissors.jpg';
    });
    

    
    
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/pens', {
            templateUrl: 'pens.html',
            controller: 'pensController'
        })
            .when('/notebooks', {
            templateUrl: 'notebooks.html',
            controller: 'notebooksController'
        })
        .when('/scissors', {
            templateUrl: 'scissors.html',
            controller: 'scissorsController'
        })
            

    });

})();   

