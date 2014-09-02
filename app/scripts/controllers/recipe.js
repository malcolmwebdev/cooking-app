'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
  .controller('recipeCtrl',['$scope','$routeParams','$sce','Recipe',  function ($scope, $routeParams,$sce, Recipe) {
   $scope.awesomeThing = Recipe.query();
//   $scope.iframeUrl = $sce.trustAsHtml($scope.awesomeThing.sourceRecipeUrl);
    window.params= $routeParams;
  }]);