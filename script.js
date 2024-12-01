const container = document.querySelector("#container");
const containerWidth = document.getElementById("container").clientWidth;
const button = document.querySelector("button");

let numOfSq = 16; //default number of squares

function clearContainer() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function colorRandomizer() {
    const randomNum = () => {return Math.floor(Math.random() * 255);}
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

function createSquares() {
    clearContainer();
    for (i = 0; i < numOfSq**2; i++){
        const sq = document.createElement("div");
        sq.classList.add("sqDiv");
        sq.style.width = `${containerWidth / numOfSq}px`;
        container.appendChild(sq);
        sq.addEventListener("mouseenter", () =>{
            sq.style.backgroundColor = colorRandomizer();
        })
    }
}

function receiveInput() {
    let userInput = prompt("How many per side do you want?");
    if (userInput <= 100){
        numOfSq = userInput;
    }
    else{
        alert("Please input a number less than or equal to a 100.")
        return null;
    }
}

button.addEventListener("click", () => {
    if (receiveInput() !== null){
        createSquares();
    }
    else {
        return;
    }
});

createSquares();



