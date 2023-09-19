import { startBoot } from "./boot.js";



window.onload = function () {
    sessionStorage.setItem("currentPage", "powerButton");
    
    let powerButton = document.getElementById("play-power-button");
    powerButton.addEventListener("click", function () {
        changePage("boot", startBoot);
    });
}


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


export function getCurrentPage() {
    

}

