import { startBoot } from "./boot.js";

window.onload = function () {
    sessionStorage.setItem("currentPage", "powerButton");
    // TODO: Delete this 
    changePage("home");
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
