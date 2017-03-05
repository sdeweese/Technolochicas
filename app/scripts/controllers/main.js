'use strict';

/**
 * @ngdoc function
 * @name actGenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the actGenApp
 */
angular.module('actGenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
