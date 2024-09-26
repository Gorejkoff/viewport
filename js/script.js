// строгий режим
"use strict"

const WIDTH_DATA = document.getElementById('width-data');
const HEIGHT_DATA = document.getElementById('height-data');
const ORIENTATION_DATA = document.getElementById('orientation-data');
const ANGLE_DATA = document.getElementById('angle-data');

function getWidth() {
   WIDTH_DATA.innerHTML = window.innerWidth;
}
function getHeight() {
   HEIGHT_DATA.innerHTML = window.innerHeight;
}

function getOrientation() {
   if (screen.orientation.type == "landscape-primary") {
      ORIENTATION_DATA.innerHTML = 'landscape';
   }
   if (screen.orientation.type == "portrait-primary") {
      ORIENTATION_DATA.innerHTML = 'portrait';
   }
   if (screen.orientation.type == "landscape-secondary") {
      ORIENTATION_DATA.innerHTML = 'secondary';
   }
   ANGLE_DATA.innerHTML = screen.orientation.angle;
}

window.addEventListener('resize', function () {
   getHeight()
   getWidth()
   getOrientation()

})

getHeight()
getWidth()
getOrientation()

