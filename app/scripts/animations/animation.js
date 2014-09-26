'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
    .animation(".fade", function() {
        return {
            enter: function(element, className) {
                TweenMax.to(element, 1, {opacity: 1});
            }
        }
    })