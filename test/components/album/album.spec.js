(function() {
  'use strict';

  describe('Controller: AlbumController', function() {

    beforeEach(module('Lifebooks.components.album'));

    var AlbumController;

    beforeEach(inject(function($controller) {
      AlbumController = $controller('AlbumController');
    }));

    describe('AlbumController', function() {
      it('Test Case', function() {
        AlbumController.activate();
      });
    });
  });
})();
