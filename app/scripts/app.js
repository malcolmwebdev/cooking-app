'use strict';

/**
 * @ngdoc overview
 * @name cookingApp
 * @description
 * # cookingApp
 *
 * Main module of the application.
 */
angular
  .module('cookingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'recipesServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/query/:query', {
        templateUrl: 'views/query.html',
        controller: 'MainCtrl'
      })
      .when('/recipeId/:recipeId', {
        templateUrl: 'views/recipe.html',
        controller: 'recipeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
