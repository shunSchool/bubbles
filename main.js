//bubble objects (Associative arrays - property: value pairs)

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800
cnv.height = 600;

let bubble =  {
    x: 400,
    y: 300,
    r: 25
};

requestAnimationFrame(draw);
function draw() {
    fill("blue");
    circle(bubble.x, bubble.y, bubble.r, "fill");

    requestAnimationFrame(draw)
}

function newBubble(initX, initY, initR){
    return{
        x: initX,
        y: initY,
        r: initR,
    }
}