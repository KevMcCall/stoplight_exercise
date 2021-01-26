(function() {
  'use strict';
// Retrieve Stoplight Elements //
  let stop = document.getElementById("stopButton");
  let stopBulb = document.getElementById("stopLight");
  let slow = document.getElementById("slowButton");
  let slowBulb = document.getElementById("slowLight");
  let go = document.getElementById("goButton");
  let goBulb = document.getElementById("goLight");

// Event Listener For When Stop Button Is Clicked
  stop.addEventListener("click", function() {
    stopBulb.classList.toggle('stop')
  })

})();
