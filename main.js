(function(){
  'use strict';

  var time, hours, minutes, seconds;
  var clockHover = document.querySelector('#clock');
  var colorHover = false;
  var line = document.querySelector ('#underline');

  function moveUnderline(){
    console.log('testing');
    line.animate(1.0);
  }

  function calltime(){
    // Setup Variables
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    // Fix zero padding
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Convert seconds to percent of a minute
    var minPercent = seconds / 60;

    // Convert hours, minutes, seconds to hex values for use as a hex color
    var hoursHex = ( Math.floor( 255 * minPercent )).toString(16);//hours.toString(16);
    var minutesHex = ( Math.floor( 100 * minPercent ) + 60).toString(16);
    var secondsHex = ( Math.floor( 10 * minPercent ) + 120).toString(16);


    // Set the display of my clock
    if (colorHover){
      document.getElementById("clock").textContent = hoursHex + ":" + minutesHex + ":" + secondsHex;

    }else{
      document.getElementById("clock").textContent = hours + ":" + minutes+ ":" + seconds;

    }


    // Create html/css hex color code
    var colorAsHex = '#' + hoursHex + minutesHex + secondsHex; // #FFCB445

    // Set the body to use html/css hex color code
    var bodyElement = document.querySelector('body');
    bodyElement.style.backgroundColor = colorAsHex;
  }



  function isHovering(){
    console.log('test');
    colorHover = true;
  }

  function notHovering(){
    colorHover = false;
  }





  clockHover.addEventListener('mouseenter', isHovering);
  clockHover.addEventListener('mouseleave', notHovering);

  setInterval(calltime, 1000);
}());
