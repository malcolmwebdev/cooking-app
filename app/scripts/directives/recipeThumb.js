'use strict';

/**
 * @ngdoc overview
 * @name cookingApp
 * @description
 * # cookingApp
 *
 * Main module of the application.
 */

angular.module('cookingApp')
.directive("recipe", function() {
    return {
        restrict: "E",
        controller: function ($scope){

        },

        templateUrl: 'templates/recipeThumb.html',
        link: function(scope) {
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            scope.network = scope.networks[0];
        }
    }
})