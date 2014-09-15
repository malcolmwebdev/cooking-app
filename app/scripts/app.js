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
  })
  .run(function($rootScope) {
     $rootScope.mainQueryParams = function(){
        var query = [];
        for(var key in sessionStorage){
        	var sessionItem = JSON.parse(sessionStorage[key]);
        	query.push(sessionItem.name+':');
        	for(var item in sessionItem.queryItemUrl){
        		query.push(sessionItem.queryItemUrl[item].substring(sessionItem.queryItemUrl[item].lastIndexOf("=")+1)+',');
        	}
        }
        var queryString = query.join(' ');
        return 'Searching for recipies with: '+ queryString;
     }
  });


