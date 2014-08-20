'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
  .controller('MainCtrl',['$scope','$routeParams','Recipes',  function ($scope, $routeParams, Recipes) {
   $scope.awesomeThings = Recipes.query();
    window.params= $routeParams;
  }]);
