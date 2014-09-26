'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
  .controller('recipeCtrl',['$scope','$routeParams','$sce','Recipe', '$timeout',  function ($scope, $routeParams, $sce, Recipe, $timeout) {
   $scope.awesomeThing = Recipe.query();
//    $timeout(function(){
//            var url = $('.url').text();
//            console.log(url);
//            $('iframe').attr('src',url).css({height:'1000px',width:'2000px'});
//        },900);
  }]);