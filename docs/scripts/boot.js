
window.onload = function()
{
    
    fetch("../txt/bootLog.txt").then(response => response.text()).then(data => {

        let lines = data.split("\n");
        let parent = document.getElementById("log");
        lineScroller(lines, parent, 0);
        
    }).catch(error => { console.log(error); });
    
    new Promise(resolve => setTimeout(resolve, 17500)).then(() =>{
        window.location.replace("loadingScreen.html");
    });

}

addEventListener("keydown", function(event) {
    if(event.code == "Space") {
        window.location.replace("loadingScreen.html");
    } 
});

function lineScroller(lines, parent, index) {
    if(index < lines.length) {
        parent.innerText += lines[index];
        window.scrollTo(0,document.body.scrollHeight);
        index++;
        setTimeout(function() {
            lineScroller(lines, parent, index) 
            
        }, randomDelay());
    }
}

// Custom random delay for the OS scroll
function randomDelay() {
    let chance = Math.random();
    if (chance <= 0.5) {
        return Math.random() * 250;
    }
    if (chance <= 0.75) {
        return Math.random() * 600;
    }
    else {
        return Math.random() * 50;
    }
}

