/**
 * Calendar Components module.
 *
 * @module Lifebooks.components.calendar
 */
(function () {
  'use strict';

  angular
    .module('Lifebooks.components.calendar', ['ui.calendar'])
    .controller('CalendarController', CalendarController);

  CalendarController.$inject = [];

  /**
   * CalendarController
   *
   * @class CalendarController
   * @constructor
   */
  function CalendarController() {
    console.log('CalendarController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CalendarController.prototype.activate = function() {
    console.log('CalendarController activate Method');
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
