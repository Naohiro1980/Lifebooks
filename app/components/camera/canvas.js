/**
 * Camera Components module.
 *
 * @module Lifebooks.components.camera
 */
 (function() {
   'use strict';
   var canvas = document.getElementById('mycanvas');
   window.onload = function() {
     if (cheakFileApi() && cheakCanvas(canvas)) {
       var fileimage = document.getElementById('fileimage');
       fileimage.addEventLister('change', selectReadfile, false);
     }
   };

   function cheakCanvas(canvas) {
     if (canvas && canvas.getContext) {
       return true;
     }
     console.log('NG');
     return false;
   }

   function cheakFileApi() {
     if (window.file && window.FileReader && window.FileList && window.Blob) {
       return true;
     }
     console.log('NG');
     return false;
   }

   function selectReadfile(e) {
     var file = e.target.files;
     var reader = new FileReader();
     reader.readAsDataURL(file[0]);
     reader.onload = function() {
       readDrawImg(reader, canvas, 0, 0);
     };
   }

   function readDrawImg(reader, canvas, x, y) {
     var img = readImg(reader);
     img.onload = function() {
       var w = img.width;
       var h = img.height;
       drawImgOnCav(canvas, img, x, y, w, h);
     };
   }

   function readImg(reader) {
     var resultdataURL = reader.result;
     var img = new Image();
     img.src = resultdataURL;
     return img;
   }

   function drawImgOnCav(canvas, img, x, y, w, h) {
     var ctx = canvas.getContext('2d');
     canvas.width = w;
     canvas.height = h;
     ctx.drawImage(img, x, y, w, h);
   }
 })();
