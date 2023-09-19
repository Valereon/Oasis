import { changePage } from "./main.js";

addEventListener("keydown", function (event) {
    if (event.code == "Space") {
        // get the page name
        let htmlName = sessionStorage.getItem("currentPage");

        if (htmlName == "boot") 
            changePage("load", null);

        else if (htmlName == "load")
            changePage("home", null);
    }
});