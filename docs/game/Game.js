let solarSystemSize = 15;
let solarSystemSizeLimit = 0;

let planetSize = [
    5, //Sun
    1, // Mercury
    1, // Venus
    1, // Earth
    1, // Mars
    1, // Jupiter
    1, // Saturn
    1, // Uranus
    1, // Neptune
    1 // Pluto
]
let planetColor = [
    [255,140,0], // Sun
    [255, 255, 255], // Mercury
    [255, 255, 255], // Venus
    [0, 0, 255], // Earth
    [255, 0, 0], // Mars
    [255, 255, 0], // Jupiter
    [255, 255, 0], // Saturn
    [0, 255, 255], // Uranus
    [0, 0, 255], // Neptune
    [255, 255, 255] // Pluto
]
let planetName = [
    "Sun",
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
]

let planetDistance = [
    0, // Sun
    25, // Mercury
    50, // Venus
    75, // Earth
    100, // Mars
    125, // Jupiter
    150, // Saturn
    175, // Uranus
    200, // Neptune
    225 // Pluto
]


// function setup(){
//     createCanvas(windowWidth, windowHeight);
//     textAlign(CENTER, CENTER);
//     textSize(windowWidth/30);
// }

// function draw() {
//     background(25);
//     drawSolarSystemRings();
//     drawSolarSystem();    
// }
  

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }


function drawSolarSystem(){
    for(var i = 0; i < planetSize.length; i++){
        fill(planetColor[i][0], planetColor[i][1], planetColor[i][2]);
        circle(windowWidth/2 + planetDistance[i] * solarSystemSize, windowHeight/2, planetSize[i] * solarSystemSize);
    }
}


function drawSolarSystemRings(){
    for(var i = 0; i < planetSize.length; i++){
        noFill();
        circle(windowWidth/2, windowHeight/2, planetDistance[i]);
        noFill();
    }
}