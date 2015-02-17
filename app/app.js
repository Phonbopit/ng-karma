'use strict'

angular.module('myApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'HelloController'
      })
      .otherwise({
        redirectTo: '/home'
      })
  }]);