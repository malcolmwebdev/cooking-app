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
   $scope.addParam = function(queryItem ,param){
        if(typeof param === 'undefined'){
          param = '';
        };

        if(queryItem in sessionStorage){
           sessionStorage[queryItem].push(param);
        }else{
            Object.defineProperty(sessionStorage, queryItem, {
                writable:true,
                value: [param]
            });
        }
   }//end addParam
    window.params= $routeParams;
  }]);
