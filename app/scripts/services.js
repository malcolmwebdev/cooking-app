'use strict';

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
          'http://api.yummly.com/v1/api/recipes?_app_id=60131cd7&_app_key=b970f11897c39b561dbad8a3ed7dc2f2&q=:query', { callback: "JSON_CALLBACK"}, {
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
          'http://api.yummly.com/v1/api/recipe/:recipeId?_app_id=60131cd7&_app_key=b970f11897c39b561dbad8a3ed7dc2f2', { callback: "JSON_CALLBACK"}, {
          query: {
            method:'JSONP',
            params:{recipeId:$routeParams.recipeId},
            isArray:false
          }
        });
      }]);