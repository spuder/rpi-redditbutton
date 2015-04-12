# rpi-redditbutton

Changes the color of a LED connected to a raspberry pi, based on the value of the reddit button. 

# Getting started

Install node.js on your raspberry pi

    sudo apt-get update
    wget http://node-arm.herokuapp.com/node_latest_armhf.deb
    sudo dpkg -i node_latest_armhf.deb
    
  
Install pi-blaster

    cd ~
    git clone https://github.com/sarfata/pi-blaster
    cd pi-blaster
    sudo apt-get install autoconf
    ./autogen.sh
    ./configure
    make
    sudo make install # Will cause the pi-blaster daeomon to start automatically at boot
    
    
    
Clone this git repo, and install the dependencies

     git clone https://github.com/spuder/rpi-redditbutton.git
     cd rpi-redditbutton
     npm install
     
Then plug a LED and a resistor into the following pins on your raspberrypi

- GPIO 17 => red  
- GPIO 22 => green  
- GPIO 23 => blue  

Pinout located here (Rembember the pins are upside down, 1 is at the bottom of the board)  
[http://pi.gadgetoid.com/pinout](http://pi.gadgetoid.com/pinout)

Then start the application

     node button.js
     
The color of the LED should change based on the status of the button on reddit


## Alternative visualization
If you are lazy, or don't have a raspberry pi, just install the chrome extension. 

[https://www.reddit.com/r/thebutton/wiki/index](https://www.reddit.com/r/thebutton/wiki/index)



# Credits

Most of the code was graciously copied from the following sources. 

[https://github.com/nattress/thebutton-hue](https://github.com/nattress/thebutton-hue)  
[http://pijs.io/learn/control-an-rgb-led](http://pijs.io/learn/control-an-rgb-led)  
[https://github.com/sarfata/pi-blaster](https://github.com/sarfata/pi-blaster)  
[https://github.com/sarfata/pi-blaster.js](https://github.com/sarfata/pi-blaster.js)