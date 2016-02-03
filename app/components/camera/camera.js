/**
 * Camera Components module.
 *
 * @module Lifebooks.components.camera
 */
(function () {
  'use strict';
  var myApp = angular.module('Lifebooks', []);

  myApp.directive('fileModel', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        element.bind('change', function() {
          scope.$apply(function() {
            model.assign(scope, element[0].files[0]);
          });
        });
      }
    };
  }]);

  myApp.controller('myController', ['$scope', function($scope) {

    $scope.$watch('imageFile', function(imageFile) {

      $scope.imageFileSrc = undefined;

      if (!imageFile || !imageFile.type.match('image.*')) {
        return;
      }

      var reader = new FileReader();
      reader.onload = function() {
        $scope.$apply(function() {
          $scope.imageFileSrc = reader.result;
        });
      };
      reader.readAsDataURL(imageFile);
    });
  }]);
})();
