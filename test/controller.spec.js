describe('Controller', function() {

  beforeEach(module('myApp'));

  describe('MainController', function() {
    var scope, controller;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller;
      controller("MainController", { $scope: scope });
    }));

    it('should have a MainController', function() {
      expect(controller).toBeDefined();
      expect(scope).toBeDefined();
    });

    it('should have default value equal "Chai"', function() {
      scope.name = 'Chai';
      expect(scope.name).toEqual('Chai');
    });
  })
});