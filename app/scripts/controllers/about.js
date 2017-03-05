'use strict';

/**
 * @ngdoc function
 * @name actGenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the actGenApp
 */
angular.module('actGenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
