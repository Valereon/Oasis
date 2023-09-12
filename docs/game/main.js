import {dialouge, setup} from "./dialouge.js";

let buttons = {
    id : {
        buttonId : "button1",
        text : "Hello?",
        style : "outlined-button",
        func : function() {
            incrementCounter("counter1", 1);
        }
    }    
};


let counters = {
    id : {
        counterId : "counter1",
        text : "0",
        style : "counter"
    }
}



function setupButtons(){
    Object.values(buttons).forEach(element => {


        document.body.appendChild(div);
    });
}






function setupCounters(){
    Object.values(counters).forEach(element => {
        let counter = document.createElement("div");
        counter.id = element.counterId;
        counter.innerHTML = element.text;
        counter.classList.add(element.style);

        let div = document.createElement("div");
        div.appendChild(counter);
        div.classList.add("center-vert-horiz-above");

        document.body.appendChild(div);
    });
}






function incrementCounter(counterId, strength){
    let counter = document.getElementById(counterId);
    counter.innerHTML = parseInt(counter.innerHTML) + 1 * strength;
}




function autoIncrementCounter(counterId, strength, interval){
    setInterval(function(){
        incrementCounter(counterId, strength);
    }, interval);
}



window.onload = function() {
    let title = document.createElement("h1");
    title.innerHTML = "Prologue";
    title.classList.add("center-vert-horiz-above");
    title.classList.add("titleLarge");
    document.body.appendChild(title);


    new Promise(resolve => setTimeout(resolve, 7000)).then(() => {
       // setupButtons();
        document.body.removeChild(title);
        setup();
        dialouge();
    });


}