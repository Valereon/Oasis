import { startBoot } from "./boot.js";

window.onload = function () {
    sessionStorage.setItem("currentPage", "powerButton");
    // TODO: Delete this 
    changePage("home");
    setTimeout(function () {
        loadASCIIMap("TestColor");
    }, 1000);
    // let powerButton = document.getElementById("play-power-button");
    // powerButton.addEventListener("click", function () {
    //     changePage("boot", startBoot);
    // });
}

/**
 * Allows game to be a single page
 * loads a page from the pages directory
 * optional callback option to call functions on page load
 */
export function changePage(pageName, callBack=null) {
    let path = "./pages/" + pageName + ".html";
    sessionStorage.setItem("currentPage", pageName);

    fetch(path)
    .then( responese => responese.text() )
    .then( data => {
            $('body').html(data);
            if (callBack != null){
                callBack();
            }
            }
        );
}

/**
 * Load map from the file
 */
export function loadASCIIMap(mapName) {
    let path = "./maps/" + mapName + ".csv";
    fetch(path)
    .then( responese => responese.text() )
    .then( data => loadMap(data) );
}

/**
 * Map the map data into a 2D array of objects
 */
export function loadMap(data) {
    let rawData = data.split("\n");
    let lastLine = rawData[rawData.length - 1].split(",");
    let width = parseInt(lastLine[0]);
    let height = parseInt(lastLine[1]);


    let mapData = new Array(height + 1);
    for (let i = 0; i <= height; i++) {
        mapData[i] = new Array(width);
    }

    for (let i = 1; i < rawData.length; i++) {
        let lineData = rawData[i].split(",");
        let x = parseInt(lineData[0]);
        let y = parseInt(lineData[1]);
        let char = String.fromCharCode(lineData[2]);
        let color = lineData[3];
        let bgColor = lineData[4];
        mapData[x][y] = {ASCII: char, TileColor: color, BGColor: bgColor};
    }
    // Reverse all the arrays since REXPaint does it backwards
    mapData.reverse();
    for (let i = 0; i < mapData.length; i++) {
        mapData[i].reverse();
    }

    writeMapToScreen(mapData);
}
function writeMapToScreen(mapData) {
    let previousColor = "";
    let currentSpan = null;
    let pre = document.createElement("pre");
    // pre.style.backgroundColor = "#242120";
    for (let i = 0; i < mapData.length; i++) {

        currentSpan = document.createElement("span");
        currentSpan.style.color = mapData[i][0].TileColor;
        currentSpan.innerText += mapData[i][0].ASCII + " ";

        for (let j = 1; j < mapData[i].length; j++) {
            let tileData = mapData[i][j];

            if (previousColor != tileData.TileColor) {
                
                pre.appendChild(currentSpan);
                previousColor = tileData.TileColor;
                currentSpan = document.createElement("span");
                currentSpan.style.color = tileData.TileColor;

            }
            currentSpan.innerText += tileData.ASCII + " ";

        }
        pre.appendChild(currentSpan);
        previousColor = "";
        pre.appendChild(document.createElement("br"));
    }
    document.getElementById("map").appendChild(pre);
}