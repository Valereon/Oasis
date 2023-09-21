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

export function loadASCIIMap(mapName) {
    let path = "./maps/" + mapName + ".csv";
    fetch(path)
    .then( responese => responese.text() )
    .then( data => loadMap(data) );
}

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

    mapData.reverse();
    for (let i = 0; i < mapData.length; i++) {
        mapData[i].reverse();
    }

    let pre = document.createElement("pre");
    for (let i = 0; i < mapData.length; i++) {
        for (let j = 0; j < mapData[i].length; j++) {
            let tile = document.createElement("span");
            tile.innerText = mapData[i][j].ASCII + "";
            tile.style.color = mapData[i][j].TileColor;
            tile.style.backgroundColor = mapData[i][j].BGColor;
            pre.appendChild(tile);
        }
        pre.appendChild(document.createElement("br"));
    }
    
    document.getElementById("map").appendChild(pre);
}    
