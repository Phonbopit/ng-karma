describe('Hello World', function() {
  var element;
  var $scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    element = angular.element('<div simple-x>{{ 5 + 5 }}</div>');
    $compile(element)($rootScope);
  }));


  it('Should be equal 10', function() {
    $scope.$digest();
    expect(element.html()).toBe('10');
  });

  describe('Simple X', function() {
    it("should add panel class to a div", function() {
      expect(element.hasClass('panel')).toBe(true);
    });
  });
});