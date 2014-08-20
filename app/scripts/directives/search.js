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
.directive("search", function() {
    return {
        restrict: "E",
        scope: {
            queryItem: "@",
            param:"@",
            addParam:"&"
        },
        templateUrl: 'templates/search.html',

//        link: function(scope) {
//            scope.networks = ["Verizon", "AT&T", "Sprint"];
//            scope.network = scope.networks[0]
//        }
    }
})