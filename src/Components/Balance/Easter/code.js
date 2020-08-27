
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = document.getElementById("goit")

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10

const paddleHeith = 10;
const paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;

let rightPressed = false;
let leftPressed = false;


var brickRowCount = 3;
var brickColumnCount = 6;
var brickWidth = 60;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var pattern = ctx.createPattern(img, "repeat")

var score = 0;
var lives = 2;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


function drawBall () {    
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function paddleDraw () {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeith, paddleWidth, paddleHeith)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath()
}



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHendler, false)
document.addEventListener("mousemove", mouseMoveHandler, false)

function keyDownHandler (e) {
    if (e.keyCode === 39) {
        rightPressed = true
    }
    else if (e.keyCode ===37) {
        leftPressed =true
    }
}

function keyUpHendler (e) {
    if (e.keyCode === 39) {
        rightPressed = false
    }
    else if (e.keyCode ===37) {
        leftPressed =false
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}



function endGame () {
    lives--;
    if(!lives) {
        alert("GAME OVER");
        document.location.reload();
    }
    else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width-paddleWidth)/2;
    }
}

function drawBricks () {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if (bricks[c][r].status ===1 ) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            // ctx.fillStyle = pattern;
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status === 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score ++
                    if (score === brickColumnCount*brickRowCount) {
                        alert ("YOU WIN");
                        document.location.reload();
                        // clearInterval(interval)
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBricks()
    drawBall()    
    paddleDraw()
    collisionDetection()
    drawScore()
    drawLives()
    if (y + dy < ballRadius) {
        dy = -dy
    }
    else if (y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {          
            dy = -dy
        } else endGame()
    }
    if (x + dx <ballRadius || x + dx > canvas.width-ballRadius) {
        dx = -dx
    }
    x += dx;
    y += dy;

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    requestAnimationFrame(draw)
}



console.log(paddleX);


// var interval = setInterval( draw, 10)


export default draw()

