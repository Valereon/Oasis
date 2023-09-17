
let lastMS = 0;
window.onload = function()
{
    
    fetch("../txt/bootLog.txt").then(response => response.text()).then(data => {

        data.split("\n").forEach(element => {
            let delayMS = Math.floor(Math.random() * 1000);
            lastMS += delayMS;
            delay(delayMS, lastMS, element);
            lastMS = 0;

            

            
        });


    }).catch(error => { console.log(error); });

    new Promise(resolve => setTimeout(resolve, 2500)).then(() =>{
        window.location.replace("loadingScreen.html");

      });
}



function delay(delayMS, lastMS, element){
    setTimeout(function(){
        document.getElementById("log").innerText += element + "\n"; 
        let div = document.getElementById("log");
        window.scrollTo(0, document.body.scrollHeight);    
    }, delayMS + lastMS);


}