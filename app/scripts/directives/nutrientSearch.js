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
.directive("nutrientSearch", function() {
    return {
        restrict: "E",
        scope: {
            queryItem: "@",
            queryItemName:"@",
            param:"@",
            addNutritionParam:"&",
            removeNutritionParam:"&",
            options:"@"
        },
        templateUrl: 'templates/nutrientSearch.html',
    }
});