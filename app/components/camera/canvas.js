/**
 * Camera Components module.
 *
 * @module Lifebooks.components.camera
 */
 (function() {
   'use strict';
   var canvas = document.getElementById('mycanvas');
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

   function cheakCanvas(canvas) {
     if (canvas && canvas.getContext) {
       console.log('1-1');
       return true;
     }
     console.log('1');
     return false;
   }
 /*
   function cheakFileApi() {
     if (window.file && window.FileReader && window.FileList && window.Blob) {
       return true;
     }
     window.alert('cheackFileApi');
     console.log('2');
     return false;
   }
 */
   function selectReadfile(e) {
     console.log('3');
     console.log(e);
     var file = e.target.files;
     var reader = new FileReader();
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
 })();
