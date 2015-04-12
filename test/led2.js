//Turns on every led one at a time for testin

var piblaster = require('pi-blaster.js');

pin = 0
function setColor(red, green, blue) {


}

setInterval(function() {

  pin = pin + 1
  console.log("setting pin" + pin)
  piblaster.setPwm(pin, 0);
}, 500);