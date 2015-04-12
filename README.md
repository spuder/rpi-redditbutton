# rpi-redditbutton

Changes the color of a LED connected to a raspberry pi, based on the value of the reddit button. 

# Getting started

Install node.js on your raspberry pi

    sudo apt-get update
    wget http://node-arm.herokuapp.com/node_latest_armhf.deb
    sudo dpkg -i node_latest_armhf.deb
    
If it worked, you should be able to run `node`

    node -v
    v0.12.1
   
   
    
Clone this git repo, and install the dependencies

     git clone https://github.com/spuder/rpi-redditbutton.git
     cd rpi-redditbutton
     npm install
     


If you are lazy, or don't have a raspberry pi, just install the chrome extension. 

[https://www.reddit.com/r/thebutton/wiki/index](https://www.reddit.com/r/thebutton/wiki/index)



# Credits

Most of the code here is graciously copied from the following sources. 

[https://github.com/nattress/thebutton-hue](https://github.com/nattress/thebutton-hue)  
[http://pijs.io/learn/control-an-rgb-led](http://pijs.io/learn/control-an-rgb-led)  
