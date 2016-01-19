/**
 * This is Lifebooks module.
 *
 * @module Lifebooks
 */
(function () {
  'use strict';

  angular
    .module('Lifebooks', [
      'ngNewRouter',
      'Lifebooks.config',
      'Lifebooks.components.home',
      'Lifebooks.components.about',
      'Lifebooks.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main Lifebooks
   * @constructor
   */
  function AppController () {}
})();
