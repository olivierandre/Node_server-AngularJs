// public/js/appRoutes.js
var module = angular.module('app')

module.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })
    .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'MainController'
    })

})
