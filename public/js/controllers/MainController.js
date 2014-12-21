// public/js/controllers/MainCtrl.js
var module = angular.module('app')

module.controller('MainController', function($scope, $http) {

    $scope.tagline = 'To the moon and back!';

   	$http.get("role.json").success(function(response) {
    	$scope.roles = response
    })  

   	$http.get("propriete.json").success(function(response) {
   		$scope.propriete = response
   	})

   	$http.get("prop_role.json").success(function(response) {
   		$scope.def = response

   		console.log(response[0].roles)

   	})

});