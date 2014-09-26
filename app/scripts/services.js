'use strict';

var appId  = '';
var appKey = '';
/**
 * @ngdoc overview
 * @name cookingApp
 * @description
 * # cookingApp
 *
 * Main module of the application.
 */
var recipesServices = angular.module('recipesServices', ['ngResource']);

recipesServices.factory('Recipes', ['$resource', '$routeParams',
      function($resource, $routeParams){
        return $resource(
          'http://api.yummly.com/v1/api/recipes?_app_id='+appId+'&_app_key='+appKey+'&q=:query', { callback: "JSON_CALLBACK"}, {
          query: {
            method:'JSONP',
            params:{query:$routeParams.query},
            isArray:false
          }
        });
      }]);

recipesServices.factory('Recipe', ['$resource', '$routeParams',
      function($resource, $routeParams){
        return $resource(
          'http://api.yummly.com/v1/api/recipe/:recipeId?_app_id='+appId+'&_app_key='+appKey, { callback: "JSON_CALLBACK"}, {
          query: {
            method:'JSONP',
            params:{recipeId:$routeParams.recipeId},
            isArray:false
          }
        });
      }]);