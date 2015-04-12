// var HueApi = require("node-hue-api");
var app = require('http').createServer()
var WebSocketClient = require('websocket').client;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var piblaster = require("pi-blaster.js");

// RGB values taken from the flair CSS settings.  I had to tweak blue since the Hue does a bad
// job with light blue colours.

var red_pin = 17
var green_pin = 22
var blue_pin = 23
piblaster.setPwm(red_pin, 0);
piblaster.setPwm(green_pin, 0);
piblaster.setPwm(blue_pin, 0);

function rgbFromSecondsRemaining(seconds)
{
    var i = parseInt(seconds);

    if (i > 51)
        // Dark Blue
        return [130, 0, 128];
    else if (i > 41)
        // Purple #0032C7
        return [0, 50, 199];
    else if (i > 31)
        // Green #02BE01
        return [2, 190, 1];
    else if (i > 21)
        // Yellow #E5D90A
        return [229, 217, 0];
    else if (i > 11)
        // Orange #E59500
        return [229, 149, 0];
    else
        // Red #E50000
        return [229, 0, 0];
}

function setLights(timeRemaining)
{
    var rgb = rgbFromSecondsRemaining(timeRemaining);
    console.log("Setting lights to " + rgb);

    var red = rgb[0]
    var green = rgb[1]
    var blue = rgb[2]
    console.log("setColor:" + red + "," + green + "," + blue);

    piblaster.setPwm(red_pin, red/255 );
    piblaster.setPwm(green_pin, green/255 );
    piblaster.setPwm(blue_pin, blue/255 );

}


// Shamelessly stolen from Jamesrom's cool button visualizer:
// https://github.com/jamesrom/jamesrom.github.io/blob/master/comms.js
var Comms = (function() {
    var self = {};
    var sock;

    var redditRequester = new XMLHttpRequest();

    redditRequester.onreadystatechange = function () {
        if (redditRequester.readyState !== 4) {
            return;
        }
        var websocketURL;
        if (redditRequester.status === 200) {
            var regex = /"(wss:\/\/wss\.redditmedia\.com\/thebutton\?h=[^"]*)"/g;
            websocketURL = regex.exec(redditRequester.responseText)[1];
        }

        websocketURL = websocketURL || "wss://wss.redditmedia.com/thebutton?h=7f66bf82878e6151f7688ead7085eb63a0baff0b&e=1428621271";
        
        console.log("Connecting to: " + websocketURL);
        var client = new WebSocketClient();

        client.on('connect', function(connection) {
            connection.on('message', tick);
        });

        client.connect(websocketURL);
    };
    // Use CORS proxy by lezed1 to get the Reddit homepage!
    redditRequester.open("get", "http://cors-unblocker.herokuapp.com/get?url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fthebutton", true);
    redditRequester.send();

    function tick(evt) {
        var packet = JSON.parse(evt.utf8Data);
        
        // if (HueInitialized)
        // {
            console.log(packet.payload.seconds_left + "s");
            setLights(packet.payload.seconds_left);
        // }
    }

    return self;
}())