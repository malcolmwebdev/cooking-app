'use strict';

/**
 * @ngdoc function
 * @name cookingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cookingApp
 */
angular.module('cookingApp')
  .controller('MainCtrl',['$scope','$routeParams','Recipes','$location','$window',  function ($scope, $routeParams, Recipes, $location, $window) {
      $scope.awesomeThings = Recipes.query();
      $scope.addParam = function(queryItemUrl , queryItemName, param){
           if(typeof param === 'undefined' || param===''){
             alert('Please input a valid item');
           }else{
             if(queryItemUrl in sessionStorage){
                var sesStorJSON = JSON.parse(sessionStorage.getItem(queryItemUrl));
                sesStorJSON.queryItemUrl.push('&'+queryItemUrl+'[]='+param);
                sessionStorage.setItem(queryItemUrl,JSON.stringify(sesStorJSON))
             }else{
                sessionStorage.setItem(queryItemUrl,JSON.stringify({name:queryItemName,queryItemUrl:['&'+queryItemUrl+'[]='+param]}))
             }
           };
      }//end addParam

      $scope.removeParam = function(queryItemUrl ,param){
            if(typeof param === 'undefined' || param===''){
               alert('Please input a valid item');
            }else{
                if(queryItemUrl in sessionStorage){
                    var sesStorJSON = JSON.parse(sessionStorage.getItem(queryItemUrl));
                    sesStorJSON.queryItemUrl.splice(sesStorJSON.queryItemUrl, 1);
                    sessionStorage.setItem(queryItemUrl,JSON.stringify(sesStorJSON));
                }
            };
      };// end removeParam

      $scope.addNutritionParam = function(nutrient, amount, minMax){
             if(typeof nutrient === 'undefined' || typeof amount==='undefined' || typeof minMax==='undefined'){
                  alert('Please input a valid nutrient, amount and select min or max');
             }else{
                 var query = '&nutrition.'+nutrient.val+'.'+minMax+'='+amount;
                 if('nutrients' in sessionStorage){
                      var sesStorJSON = JSON.parse(sessionStorage.getItem('nutrients'));
                      sesStorJSON.push(query);
                      sessionStorage.setItem('nutrients',JSON.stringify(sesStorJSON));
                 }else{
                     sessionStorage.setItem('nutrients',JSON.stringify({name:'Selected Nutrients',nutrients:[query]}));
                 }
             };
      };
      $scope.removeNutritionParam = function(nutrient, amount, minMax){
            if(typeof nutrient === 'undefined' || typeof amount==='undefined' || typeof minMax==='undefined'){
                   alert('Please input a valid nutrient, amount and select min or max');
             }else{
                   var sesStorJSON = JSON.parse(sessionStorage.getItem('nutrients'));
                   if('nutrients' in sessionStorage){
                        for(var i=0; sesStorJSON.nutrients.length; i++){
                        	if(sesStorJSON.nutrients[i].indexOf(nutrient.val)>-1){
                           		sesStorJSON.nutrients.splice(i, 1);
                           		sessionStorage.setItem('nutrients',JSON.stringify(sesStorJSON));
                        	}
                        }
                   }
             };

      };

      $scope.getRecipes = function(){
        var urlArray = [];
        for(var key in sessionStorage){
        	var sessionItem = JSON.parse(sessionStorage[key]);

        	for(var item in sessionItem.queryItemUrl){
        		urlArray.push(sessionItem.queryItemUrl[item]);
        	}
        }
        var urlReady = encodeURI(urlArray.toString().replace(/,/g , "")),
            baseUrl = document.URL,
            fullRecipeUrl = baseUrl+'query/'+urlReady;
            $window.location.href = fullRecipeUrl;
            $window.location.reload(true);
      };

      $scope.clearRecipes = function(){
            sessionStorage.clear();
      };

      $scope.queryItemsTextbox = [
        {
            queryItem:"Included Ingredients",
            urlQueryItem:"allowedIngredient"
        },
        {
            queryItem:"Excluded Ingredients",
            urlQueryItem:"excludedIngredient"
        },
        {
            queryItem:"Max Cooking Time (in seconds)",
            urlQueryItem:"maxTotalTimeInSeconds"
        },
      ];
      $scope.queryItemsSelect = [
        {
            queryItem: "Allergy",
            urlQueryItem:"allowedAllergy",
            options:["Dairy", "Egg", "Gluten", "Peanut", "Seafood", "Sesame", "Soy", "Sulfite", "Tree Nut", "Wheat"]
        },
        {
            queryItem: "Diet",
            urlQueryItem:"allowedDiet",
            options:["Lacto vegetarian", "Ovo vegetarian", "Pescetarian", "Vegan", "Vegetarian"]
        },
        {
            queryItem: "Included Cuisine",
            urlQueryItem:"allowedCuisine",
            options:["American", "Italian", "Asian", "Mexican", "Southern & Soul Food", "French", "Southwestern", "Barbecue", "Indian", "Chinese", "Cajun & Creole", "English", "Mediterranean", "Greek", "Spanish", "German", "Thai", "Moroccan", "Irish", "Japanese", "Cuban",  "Swedish", "Hungarian", "Portugese"]
        },
        {
            queryItem: "Excluded Cuisine",
            urlQueryItem:"excludedCuisine",
            options:["American", "Italian", "Asian", "Mexican", "Southern & Soul Food", "French", "Southwestern", "Barbecue", "Indian", "Chinese", "Cajun & Creole", "English", "Mediterranean", "Greek", "Spanish", "German", "Thai", "Moroccan", "Irish", "Japanese", "Cuban",  "Swedish", "Hungarian", "Portugese"]
        },
        {
            queryItem: "Allowed Course",
            urlQueryItem:"allowedCourse",
            options:["Main Dishes", "Desserts", "Side Dishes", "Lunch and Snacks", "Appetizers", "Salads", "Breads", "Breakfast and Brunch", "Soups", "Beverages", "Condiments and Sauces", "Cocktails"]
        },
        {
            queryItem: "Excluded Course",
            urlQueryItem:"excludedCourse",
            options:["Main Dishes", "Desserts", "Side Dishes", "Lunch and Snacks", "Appetizers", "Salads", "Breads", "Breakfast and Brunch", "Soups", "Beverages", "Condiments and Sauces", "Cocktails"]
        },
        {
            queryItem: "Included Holiday",
            urlQueryItem:"includedHoliday",
            options:["Christmas", "Summer", "Thanksgiving", "New Year", "Super Bowl / Game Day", "Halloween", "Hanukkah", "4th of July"]
        },
        {
            queryItem: "Excluded Holiday",
            urlQueryItem:"excludedHoliday",
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
        sessionStorage.clear();
  }]);

