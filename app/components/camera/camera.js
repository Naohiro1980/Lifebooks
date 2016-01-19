/**
 * Camera Components module.
 *
 * @module Lifebooks.components.camera
 */
(function () {
  'use strict';

  angular
    .module('Lifebooks.components.camera', [])
    .controller('CameraController', CameraController);

  CameraController.$inject = [];

  /**
   * CameraController
   *
   * @class CameraController
   * @constructor
   */
  function CameraController() {
    console.log('CameraController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CameraController.prototype.activate = function() {
    console.log('CameraController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
