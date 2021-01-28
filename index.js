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






// - When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
// - When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.

  // Console Log Mouse Enter //
  var goBulb = stopButton.addEventListener("mouseenter", function() {
    console.log("Entered stop button");
})

var slowBulb = slowButton.addEventListener("mousenter", function() {
    console.log("Entered slow button");
})

var goBulb = goButton.addEventListener("mouseenter", function() {
    console.log("Entered go button");
})

  

})();
