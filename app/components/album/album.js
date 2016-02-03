/**
 * Album Components module.
 *
 * @module Lifebooks.components.album
 */
(function () {
  'use strict';

  var app = angular.module('Lifebooks.components.album', ['firebase']);
  app.controller('AlbumController', AlbumController);
  app.directive('fileModel', AlbumDirective);
  AlbumController.$inject = ['$firebaseArray'];
  AlbumDirective.$inject = ['$parse'];

  /**
   * AlbumController
   *
   * @class AlbumController
   * @constructor
   */
  function AlbumController() {
    console.log('AlbumController Constructor');
  }

  function AlbumDirective($parse, $scope) {
    console.log('AlbumDirective Constructor');
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        element.bind('change', function () {
          scope.$apply(function () {
            model.assign(scope, element[0].files[0]);
          });
        });
      }
    };
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  AlbumController.prototype.activate = function($firebaseArray, $scope) {
    console.log('AlbumController activate Method');
    vm = this;

    /*firebaseのインスタンス生成*/
    var ref = new window.Firebase('https://fiery-torch-4495.firebaseio.com/');
    $scope.messages = $firebaseArray(ref);

    /*fileAPIの写真データ取得*/
    $scope.$watch('imageFile', function(imageFile) {
      $scope.imageFileSrc = undefined;
      /*データがない場合*/
      if (!imageFile || !imageFile.type.match('image.*')) {
        return;
      }
      /*写真情報格納*/
      var imagedata = imageFile;
      /*ファイルオブジェクト生成*/
      var reader = new FileReader();
      reader.onload = function() {
        $scope.$apply(function() {
          /*写真を表示*/
          $scope.imageFileSrc = reader.result;
        });
      };
      reader.readAsDataURL(imageFile);
      /*firebaseに写真登録*/
      $scope.onclick = function() {
        console.log(imagedata);
        $scope.messages.$add({
          'img': reader.result, /*写真*/
          'coment': $scope.coment
        });
      };
    });

    /*tabs*/
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tab) {
      $scope.activeTab = tab;
    };

  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
