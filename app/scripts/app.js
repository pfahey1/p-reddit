/* global app:true */
/* exported app */
/*'Firebase': false*/

'use strict';

var app = angular.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);

  app.config(function ($routeProvider) {
	  $routeProvider
	    .when('/', {
	      templateUrl: 'views/posts.html',
	      controller: 'PostsCtrl'
	    }) 
	    .when('/posts/:postId', {
	        templateUrl: 'views/showpost.html',
	        controller: 'PostViewCtrl'
	      })
	    .when('/register', {
	    	  templateUrl: 'views/register.html',
	    	  controller: 'AuthCtrl',
	    	  resolve: {
	    	    user: function(Auth) {
	    	      return Auth.resolveUser();
	    	    }
	    	  }
	    	})
    	.when('/login', {
    		  templateUrl: 'views/login.html',
    		  controller: 'AuthCtrl',
    		  resolve: {
    		    user: function(Auth) {
    		      return Auth.resolveUser();
    		    }
    		  }
    		})
    		.when('/users/:userId', {
    			  templateUrl: 'views/profile.html',
    			  controller: 'ProfileCtrl'
    			})
	    .otherwise({
        redirectTo: '/'
      });
  });
  
  app.constant('FIREBASE_URL', 'https://incandescent-heat-9180.firebaseIO.com/');
