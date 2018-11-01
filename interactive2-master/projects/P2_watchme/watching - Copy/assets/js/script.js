$(document).ready(function() {
  initialize();
});

// works out the X, Y position of the click inside the canvas from the X, Y position on the page
function getPosition(mouseEvent, sigCanvas) {
    var rect = sigCanvas.getBoundingClientRect();
    return {
      X: mouseEvent.clientX - rect.left,
      Y: mouseEvent.clientY - rect.top
    };
}


function initialize() {

  // get references to the canvas element as well as the 2D drawing context
  var sigCanvas = document.getElementById("canvas");
  var context = sigCanvas.getContext("2d");

  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  context.strokeStyle = "#000000";
  context.lineJoin = "round";
  context.lineWidth = .4;

  // Add background image to canvas - remove for blank white canvas
  var background = new Image();
  // background.src = "https://3.bp.blogspot.com/_jFM-Fd8NDFE/TLhmRK1h8AI/AAAAAAAAKcU/NKNPe051PbA/s1600/OldCanvas-5.jpg";
  // Make sure the image is loaded first otherwise nothing will draw.
  background.onload = function() {
    context.drawImage(background, 0, 0);
  }



  // start drawing when the mousedown event fires, and attach handlers to
  // draw a line to wherever the mouse moves to
  $("#canvas").mouseenter(function(mouseEvent) {
    var position = getPosition(mouseEvent, sigCanvas);
    context.moveTo(position.X, position.Y);
    context.beginPath();

    // attach event handlers
    $(this).mousemove(function(mouseEvent) {
      drawLine(mouseEvent, sigCanvas, context);
    }).mouseup(function(mouseEvent) {
      finishDrawing(mouseEvent, sigCanvas, context);
    }).mouseout(function(mouseEvent) {
      finishDrawing(mouseEvent, sigCanvas, context);
    });
  });

}

$(document).click(function(e){

        // store the click position
        xPos = e.pageX;
        yPos = e.pageY;

        // add text to the page where the user clicks
        $('.blank').append('<div class="clickaddition"; style="top: ' + yPos +'px; left:' + xPos + 'px; position: absolute"></div>')

    });

// draws a line to the x and y coordinates of the mouse event inside
// the specified element using the specified context
function drawLine(mouseEvent, sigCanvas, context) {

  var position = getPosition(mouseEvent, sigCanvas);

  context.lineTo(position.X, position.Y);
  context.stroke();
}

// draws a line from the last coordiantes in the path to the finishing
// coordinates and unbind any event handlers which need to be preceded
// by the mouse down event
function finishDrawing(mouseEvent, sigCanvas, context) {
  // draw the line to the finishing coordinates
  drawLine(mouseEvent, sigCanvas, context);

  // context.closePath();

  // unbind any events which could draw
  // $(sigCanvas).unbind("mousemove")
  //   .unbind("mouseup")
  //   .unbind("mouseout");
}

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}



  var clickTimer;

  // make a counter
  var n = 0;

  $('body').mouseup(function(){
    clearTimeout(clickTimer);
    // Clear interval
    return false;

  }).mousedown(function(){

    // Set interval
    clickTimer = window.setInterval(function() {

      // add to n every 4 milliseconds
      n++;

      // tranform circle's css every 4 milliseconds
      $('#stoppedcircle').css('transform', 'scale('+n/10+')');

    },4);
    return false;
  });



    // function (event) {
    //     $('.khoverElem').removeClass('khoverElem');
    //
    // }
