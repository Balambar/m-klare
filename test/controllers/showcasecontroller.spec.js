describe('AboutController ', function() {

    beforeEach(module('myApp'));

    var AboutCtrl,
    scope;

    beforeEach(inject(function ($rootScope, $controller, About) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('about', {
            $scope: scope,
            About : About
        });
    }));

    it('should check that "showcase" is "It works!"', function () {
        expect(scope.items).toBeDefined()

    });

  


});
