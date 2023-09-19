
addEventListener("keydown", function (event) {
    if (event.code == "Space") {
        // get the page name
        let htmlName = window.location.pathname.split("/").splice(-1);

        if (htmlName == "linuxLog.html") 
            window.location.replace("/docs/loadingScreen.html");

        else if (htmlName == "loadingScreen.html")
            window.location.replace("/docs/clickerHome.html");
    }
});