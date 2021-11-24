//bubble objects (Associative arrays - property: value pairs)

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800
cnv.height = 600;

//create an array of random bubbles
let bubbles = [];

//main draw loop
requestAnimationFrame(draw);
function draw() {
// fill canvas
    background("black");    

    // move and draw all bubble
    for(let i = 0; i < bubbles.length; i++ ) {
       moveBubble (bubbles[i]);
       drawBubble(bubbles[i]);
    }

  //loop the draw function  
    requestAnimationFrame(draw);
}

//Event stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { //right arrow
        //add a new random bubble
       addBubble();
    } else if (event.keyCode = 37) { //left arrow
        //remove the last bubble
        bubbles.pop();
    }
}

// timers
setInterval(addBubble, 1000);

function addBubble() {
    bubbles.push(newBubble(400, 300, 30, randomRGB()));
}