'use strict';

// Declare app level module which depends on views, and components
angular.module('weddingApp', [
  'ngRoute',
  'weddingApp.event',
  'angularMoment'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/event'});
}]);
