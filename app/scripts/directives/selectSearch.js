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
.directive("selectSearch", function() {
    return {
        restrict: "E",
        scope: {
            queryItem: "@",
            queryItemName:"@",
            options:'@',
            param:"@",
            addParam:"&",
            removeParam:"&"
        },
        templateUrl: 'templates/selectSearch.html',

        link: function(scope) {

        }
    }
});