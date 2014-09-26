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
.directive("search", function($timeout) {
    return {
        restrict: "E",
        scope: {
            queryItem: "@",
            queryItemName:"@",
            param:"@",
            addParam:"&",
            removeParam:"&"
        },
        templateUrl: 'templates/search.html',
    }
});