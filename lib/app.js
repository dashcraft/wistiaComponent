'use strict';


	//Declare module dependencies.
	angular.module('app', [
	'ngAnimate',
	'ui.router'
	])
	.config(['$stateProvider','$locationProvider','$urlRouterProvider', function($stateProvider,$locationProvider,$urlRouterProvider){
		 $locationProvider.html5Mode({
                 enabled: true
         });
         $urlRouterProvider.otherwise("/");

         $stateProvider
              .state('home', {
                  url: "/",
                  templateUrl: "/lib/basic.html",
                  controller:function(){
                  	console.log("Basic controller");
                  }   
              })

	}])


  