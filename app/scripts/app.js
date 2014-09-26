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
        	sessionItem.queryItemUrl.forEach(function(value, item){
        	     if(item === sessionItem.queryItemUrl.length-2 && sessionItem.queryItemUrl.length-1 > 0){
        	        query.push(sessionItem.queryItemUrl[item].substring(sessionItem.queryItemUrl[item].lastIndexOf("=")+1));
        	     }else if(item !== sessionItem.queryItemUrl.length-1 && sessionItem.queryItemUrl.length-1 > 1){
        	        query.push(sessionItem.queryItemUrl[item].substring(sessionItem.queryItemUrl[item].lastIndexOf("=")+1)+',');
        	     }else if(sessionItem.queryItemUrl.length-1 === 0){
                   query.push(sessionItem.queryItemUrl[item].substring(sessionItem.queryItemUrl[item].lastIndexOf("=")+1)+'.');
                 }else{
        	        query.push(' and '+sessionItem.queryItemUrl[item].substring(sessionItem.queryItemUrl[item].lastIndexOf("=")+1)+'.');
        	     }
        	});

//        	for(var item in sessionItem.queryItemUrl){
//        	    if(item!==sessionItem.queryItemUrl.length()){}
//        		    query.push(sessionItem.queryItemUrl[item].substring(sessionItem.queryItemUrl[item].lastIndexOf("=")+1)+',');
//        		}else{
//        		     query.push(sessionItem.queryItemUrl[item].substring(' and '+sessionItem.queryItemUrl[item].lastIndexOf("=")+1)+'.');
//        		}
//        	}
        }
//        console.log(sessionItem.queryItemUrl.length);
        var queryString = query.join(' ');
        return 'Searching for recipies with: '+ queryString;
     }
  });


