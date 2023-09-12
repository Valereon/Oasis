let playerSpeed = 25;
let moveValueX = 0;
let moveValueY = 0;
let newPostitionX;
let newPostitionY;
let rockColor = [128, 132, 135]

let objectsPositions = [
    [110,110], // Earth
    [200,0], // Moon
    [20,0], // Mars
    [35,0], // Venus
    [55,0], // Mercury
    [65,0], // Sun
    [75,0], // Jupiter
    [85,0], // Saturn
    [95,0], // Uranus
    [25,0], // Neptune
    [110,330] // Pluto
]

let objectsText = [
    "Earth",
    "Moon",
    "Mars",
    "Venus",
    "Mercur",
    "Sun",
    "Jupier",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto"
]

let objectsSize = [
    1, // Earth
    1, // Moon
    1, // Mars
    1, // Venus
    1, // Mercury
    5, // Sun
    1, // Jupiter
    1, // Saturn
    1, // Uranus
    1, // Neptune
    1 // Pluto
]

function setup(){
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    newPostitionX = windowWidth/2;
    newPostitionY = windowHeight/2;
}



function draw(){
    background(0);
    text("@", windowWidth/2, windowHeight/2);
    fill(255);

    push();

    newPostitionX += moveValueX;
    newPostitionY += moveValueY;
    if(newPostitionX == windowWidth/2 && newPostitionY == windowHeight/2){
        fill(rockColor[0], rockColor[1], rockColor[2], 25);
    }
    let temp = translate(newPostitionX, newPostitionY);
    text("Earth", 0, 0);
    
    for(var i = 0; i < objectsPositions.length; i++){
        fill(255);
        text(objectsText[i], 0, 0);
        translate(objectsPositions[i][0], objectsPositions[i][1]);
        
        
    }


    pop();
    
    moveValueY = 0;
    moveValueX = 0;

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function keyTyped() {

    if (key === 'w') {
        moveValueY += playerSpeed;
    } else if (key === 's') {
        moveValueY -= playerSpeed;
    }
    else if (key === 'a') {
        moveValueX += playerSpeed;
    }
    else if (key === 'd') {
        moveValueX -= playerSpeed;
        
    }

}

function moveWorld(){

}