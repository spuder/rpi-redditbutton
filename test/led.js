/*
 * Sample code: Changes the color of an RGB led depending on the
 * current time.
 * Stolen from this page http://pijs.io/learn/control-an-rgb-led
 */

function setColor(red, green, blue) {
  console.log(util.format("setColor: %d %d %d", red, green, blue));
  piblaster.setPwm(17, red);
  piblaster.setPwm(22, green);
  piblaster.setPwm(23, blue);
//http://pi.gadgetoid.com/pinout


  // Enable the led if we have a value > 0
  if (red &gt; 0 || green &gt; 0 || blue &gt; 0) {
    piblaster.setPwm(0, 1);
  }
  // Otherwise disable it
  else {
    piblaster.setPwm(0, 0);
  }
}

var SEC_PER_MIN = 10;
setInterval(function() {
  var d = new Date();
  var intensity = 0;

  if (d.getSeconds() &gt; 60 - SEC_PER_MIN) {
    intensity = 1 - (60 - d.getSeconds()) / SEC_PER_MIN;
  }
  switch (d.getMinutes() % 3) {
    case 0:
      setColor(intensity, 0, 0);
      break;
    case 1:
      setColor(0, intensity, 0);
      break;
    case 2:
      setColor(0, 0, intensity);
      break;
  }
}, 500);