'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
  .controller('MainCtrl',['$scope','$routeParams','Recipes',  function ($scope, $routeParams, Recipes) {
      $scope.awesomeThings = Recipes.query();
      $scope.addParam = function(queryItemUrl ,param){
           if(typeof param === 'undefined' || param===''){
             alert('Please input a valid item');
           }else{
             if(queryItemUrl in sessionStorage){
                sessionStorage[queryItemUrl].push('&'+queryItemUrl+'[]='+param);
             }else{
                 Object.defineProperty(sessionStorage, queryItemUrl, {
                     writable:true,
                     value: ['&'+queryItemUrl+'[]='+param]
                 });
             }
           };
      }//end addParam

      $scope.removeParam = function(queryItemUrl ,param){
            if(typeof param === 'undefined' || param===''){
               alert('Please input a valid item');
            }else{
                if(queryItemUrl in sessionStorage){
                    sessionStorage[queryItemUrl].splice(sessionStorage[queryItemUrl].indexOf(param), 1);
                }
            };
      };// end removeParam

      $scope.addNutritionParam = function(nutrient, amount, minMax){
             if(typeof nutrient === 'undefined' || typeof amount==='undefined' || typeof minMax==='undefined'){
                  alert('Please input a valid nutrient, amount and select min or max');
             }else{
                 var query = 'nutrition.'+nutrient.val+'.'+minMax+'='+amount;
                 if('nutrients' in sessionStorage){
                    sessionStorage.nutrients.push(query);
                 }else{
                     Object.defineProperty(sessionStorage, 'nutrients', {
                         writable:true,
                         value: [query]
                     });
                 }
             };
      };
      $scope.removeNutritionParam = function(nutrient, amount, minMax){
            if(typeof nutrient === 'undefined' || typeof amount==='undefined' || typeof minMax==='undefined'){
                   alert('Please input a valid nutrient, amount and select min or max');
             }else{
                   if('nutrients' in sessionStorage){
                        for(var i=0; sessionStorage.nutrients.length; i++){
                        	if(sessionStorage.nutrients[i].indexOf(nutrient.val)>0){
                        		sessionStorage.nutrients.splice(i, 1);
                        	}
                        }
                   }
             };

      };
      $scope.search = function(){

      }

      $scope.queryItemsTextbox = [
        {
            queryItem:"included ingredient",
            urlQueryItem:"allowedIngredient"
        },
        {
            queryItem:"excluded ingredient",
            urlQueryItem:"excludedIngredient"
        },
        {
            queryItem:"max cooking time (in seconds)",
            urlQueryItem:"maxTotalTimeInSeconds"
        },
      ];
      $scope.queryItemsSelect = [
        {
            queryItem: "allergy",
            urlQueryItem:"allowedAllergy",
            options:["Dairy", "Egg", "Gluten", "Peanut", "Seafood", "Sesame", "Soy", "Sulfite", "Tree Nut", "Wheat"]
        },
        {
            queryItem: "diet",
            urlQueryItem:"allowedDiet",
            options:["Lacto vegetarian", "Ovo vegetarian", "Pescetarian", "Vegan", "Vegetarian"]
        },
        {
            queryItem: "included cuisine",
            urlQueryItem:"allowedCuisine",
            options:["American", "Italian", "Asian", "Mexican", "Southern & Soul Food", "French", "Southwestern", "Barbecue", "Indian", "Chinese", "Cajun & Creole", "English", "Mediterranean", "Greek", "Spanish", "German", "Thai", "Moroccan", "Irish", "Japanese", "Cuban",  "Swedish", "Hungarian", "Portugese"]
        },
        {
            queryItem: "excluded cuisine",
            urlQueryItem:"excludedCuisine",
            options:["American", "Italian", "Asian", "Mexican", "Southern & Soul Food", "French", "Southwestern", "Barbecue", "Indian", "Chinese", "Cajun & Creole", "English", "Mediterranean", "Greek", "Spanish", "German", "Thai", "Moroccan", "Irish", "Japanese", "Cuban",  "Swedish", "Hungarian", "Portugese"]
        },
        {
            queryItem: "allowed course",
            urlQueryItem:"allowedCourse",
            options:["Main Dishes", "Desserts", "Side Dishes", "Lunch and Snacks", "Appetizers", "Salads", "Breads", "Breakfast and Brunch", "Soups", "Beverages", "Condiments and Sauces", "Cocktails"]
        },
        {
            queryItem: "excluded course",
            urlQueryItem:"excludedCourse",
            options:["Main Dishes", "Desserts", "Side Dishes", "Lunch and Snacks", "Appetizers", "Salads", "Breads", "Breakfast and Brunch", "Soups", "Beverages", "Condiments and Sauces", "Cocktails"]
        },
        {
            queryItem: "excluded holiday",
            urlQueryItem:"excludedHoliday",
            options:["Christmas", "Summer", "Thanksgiving", "New Year", "Super Bowl / Game Day", "Halloween", "Hanukkah", "4th of July"]
        },
        {
            queryItem: "included holiday",
            urlQueryItem:"includedHoliday",
            options:["Christmas", "Summer", "Thanksgiving", "New Year", "Super Bowl / Game Day", "Halloween", "Hanukkah", "4th of July"]
        },
      ];
      $scope.queryItemNutrition = {
            queryItem: "Nutrition Attributes ",
            urlQueryItem:"nutrition.ATTR_NAME.{min|max}",
            options:[
                {
                    val:'k',
                    description:'Potassium, K'
                },
                {
                    val:'NA',
                    description:'Sodium, Na'
                },
                {
                    val:'CHOLE',
                    description:'Cholesterol'
                },
                {
                    val:'FASAT',
                    description:'Fatty acids, total saturated'
                },
                {
                    val:'CHOCDF',
                    description:'Carbohydrate, by difference'
                },
                {
                    val:'FIBTG',
                    description:'Fiber, total dietary'
                },
                {
                    val:'PROCNT',
                    description:'Protein'
                },
                {
                    val:'VITC',
                    description:'Vitamin C, total ascorbic acid'
                },
                {
                    val:'CA',
                    description:'Calcium, Ca'
                },
                {
                    val:'FE',
                    description:'Iron, Fe'
                },
                {
                    val:'SUGAR',
                    description:'Sugars, total'
                },
                {
                    val:'ENERC_KCAL',
                    description:'Energy'
                },
                {
                    val:'FAT',
                    description:'Total lipid (fat)'
                },
                {
                    val:'VITA_IU',
                    description:'Vitamin A, IU'
                },

            ]
       }
  }]);
