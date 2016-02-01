/**
 * Camera Components module.
 *
 * @module Lifebooks.components.camera
 */
(function () {
  'use strict';

  angular
    .module('Lifebooks.components.camera', ['Lifebooks.components.camera', 'firebase'])
    .controller('CameraController', CameraController);

  CameraController.$inject = ['$firebaseArray'];

  /**
   * CameraController
   *
   * @class CameraController
   * @constructor
   */
  function CameraController() {
    var canvas = document.getElementById('mycanvas');
    console.log('CameraController Constructor');
    console.log(canvas);
    window.onload = function() {
      if (cheakCanvas(canvas)) {
        console.log('0');
        var fileimage = document.getElementById('fileimage');
        console.log(fileimage);
        fileimage.addEventListener('change', selectReadfile, false);
        //fileimage.addEventLister('change', selectReadfile, false);
      }
      console.log('6');
      console.log(canvas);
    };
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CameraController.prototype.activate = function($scope, $firebaseArray) {
    console.log('CameraController activate Method');
    vm = this;
    var ref = new window.Firebase('https://glowing-heat-7665.firebaseio.com/messages');
    console.log('ref');
    $scope.messages = $firebaseArray(ref);
    $scope.addMessage = function() {
      $scope.messages.$add({
        text: $scope.newMessageText
      });
    };
  };

  function cheakCanvas(canvas) {
    if (canvas && canvas.getContext) {
      console.log('1-1');
      return true;
    }
    console.log('1');
    return false;
  }

  function selectReadfile(e) {
    console.log('3');
    console.log(e);
    var file = e.target.files;
    var reader = new FileReader();
    var canvas;
    reader.readAsDataURL(file[0]);
    reader.onload = function() {
      readDrawImg(reader, canvas, 0, 0);
    };
  }

  function readDrawImg(reader, canvas, x, y) {
    console.log('4');
    var img = readImg(reader);
    img.onload = function() {
      var w = img.width;
      var h = img.height;
      drawImgOnCav(canvas, img, x, y, w, h);
    };
  }

  function readImg(reader) {
    console.log('5');
    var resultdataURL = reader.result;
    var img = new Image();
    img.src = resultdataURL;
    return img;
  }

  function drawImgOnCav(canvas, img, x, y, w, h) {
    console.log('6');
    var ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, x, y, w, h);
  }

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
