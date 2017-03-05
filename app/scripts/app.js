'use strict';

/**
 * @ngdoc overview
 * @name actGenApp
 * @description
 * # actGenApp
 *
 * Main module of the application.
 */
angular
  .module('actGenApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      
      .when('/likedEvents', {
        templateUrl:'views/likedEvents.html',
        controller:'MainCtrl'
      })
      .when('/findActivity', {
        templateUrl:'views/findActivity.html',
        controller:'MainCtrl'
      })
    
      .when('/map', {
        templateUrl:'views/mapAllEvents.html',
        controller:'MainCtrl'
      })
      .when('/sharksGame', {
        templateUrl:'views/sharksGame.html',
        controller:'MainCtrl'
      })
      .when('/preferences', {
        templateUrl:'views/preferences.html',
        controller:'MainCtrl'
      })
      .when('/maroon5', {
        templateUrl:'views/maroon5.html',
        controller:'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
