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
.directive("queryString", function() {
    return {
        restrict: "E",
        templateUrl: 'templates/queryString.html',
    }
});