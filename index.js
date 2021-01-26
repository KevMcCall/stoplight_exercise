(function() {
  'use strict';
// Retrieve Stoplight Elements //
  let stop = document.getElementById("stopButton");
  let stopBulb = document.getElementById("stopLight");
  let slow = document.getElementById("slowButton");
  let slowBulb = document.getElementById("slowLight");
  let go = document.getElementById("goButton");
  let goBulb = document.getElementById("goLight");

  // Event Listener Toggle For When Stop Button Is Clicked //
  stop.addEventListener("click", function() {
    // Grabs Red Light In CSS//
    stopBulb.classList.toggle('stop')
  })

  // Event Listener Toggle For When Slow Button Is Clicked //
  slow.addEventListener("click", function() {
    // Orange Light //
    slowBulb.classList.toggle('slow')
  })

  // Event Listener Toggle For When Go Button Is Clicked //
  go.addEventListener("click", function() {
    // Green Light //
    goBulb.classList.toggle('go')
  })


  // Console Log Mouse Enter //
  stop.addEventListener('mouseenter', function() {
    logMouseEnter('stop');
  });

  slow.addEventListener('mouseenter', function() {
    logMouseEnter('slow');
  });

  go.addEventListener('mouseenter', function() {
    logMouseEnter('go');
  });

  function logMouseEnter(light) {
    console.log('Entered' + light + 'button');
  }

  

})();
