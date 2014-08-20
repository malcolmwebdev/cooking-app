'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
  .controller('recipeCtrl',['$scope','$routeParams','Recipe',  function ($scope, $routeParams, Recipe) {
   $scope.awesomeThing = Recipe.query();
    window.params= $routeParams;
  }]);