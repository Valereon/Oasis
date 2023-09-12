
let state = {};
var currentLine = 1;

var storyText = document.createElement("div");
var isInQuestion = false;

export function setup() {
    state = {};
    storyText.id = "storyText";
    storyText.classList.add("center-vert-horiz-above");
    storyText.classList.add("dialogue");
    storyText.innerHTML = story[currentLine].text;

    document.body.appendChild(storyText);

}


function updateStoryVars(textOfButton) {
    const textNode = story.find(textNode => textNode.id === currentLine);
    if(textNode.Options){
        state = Object.assign(state, textNode.Options.setState)
        currentLine = textNode.Options.nextText;
    }
    else
        currentLine = textNode.nextText;
}

function storyButtons(choices) {
    let container = document.createElement("div");
    container.id = "storyButtonsContainer";
    container.classList.add("center-vert-horiz");
    container.classList.add("container");

    for (let index = 0; index < choices.length; index++) {
        const element = choices[index];
        let button = document.createElement("button");

        button.innerHTML = element.text;
        button.classList.add("outlined-button");
        button.classList.add("button-grid");
        container.appendChild(button);
    }
    document.body.appendChild(container);

}

function destoryButtons() {
    let container = document.getElementById("storyButtonsContainer");
    container.remove();
}



export function dialouge() {
    const textNode = story.find(textNode => textNode.id === currentLine);
    storyText.innerHTML = textNode.text;
    if (textNode.Options) {
        isInQuestion = true;
        storyButtons(textNode.Options);
        
    }else{
        currentLine++;
    }

    
    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
        if(isInQuestion)
            return;
        dialouge();
    });
}




document.addEventListener("click", function (e) {
    if (e.target.classList.contains("button-grid")) {
        isInQuestion = false;
        destoryButtons();       
        updateStoryVars(e.target.innerHTML);
        dialouge();
    }
});



const story = [
    { id:1, text: "Hello there!" },
    { id:2, text: "I'm a story teller!" },
    { id:3, text: "I'm going to tell you a story!" },
    { id:4, text: "Once upon a time..." },
    {
        id:5,
        text: "There was a ",
        Options: [
            {
                text: "princess",
                nextText: 6,
                setState: { gender : "princess" }
            },
            {
                text: "prince",
                nextText: 6,
                setState:{ gender:"prince" }

            }
        ]
    },
    {
        id:6,
        text: "So you are a !",
        Options: [
            {
                text: "Yes",
                nextText: 7
            },
            {
                text: "No",
                nextText: 5
            }
        ]
    },
    { id:7, text: "and they were very upset becuase a great big evil monster had stolen their graphics away!" },
    { id:8, text: "They were very sad and they needed your help!" },
    { id:9, text: "Will you help them?" },
    { id:10,text: "Great!" },
    { id:11,text: "You are so kind!" }
];