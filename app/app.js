'use strict'

angular.module('myApp', [])

  .controller('MainController', function() {
    var vm = this;
    vm.name = 'Chai';
  })

  .directive('simpleX', function() {
    return function(scope, elem) {
      elem.addClass('panel');
    }
  });