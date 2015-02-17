describe('MainController', function() {
  beforeEach(module('myapp'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('main.name', function() {
    it('default name should be equal "Chai"', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      $scope.name = 'Chai';
      expect($scope.name).toEqual('Chai');
    });
  });
});