/*
(function() {
  // body...
  'use strict';
  function drawCanvas() {
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0);
    };
    img.src = './images/test.jpg';
  }
})();
*/
