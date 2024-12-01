const container = document.querySelector("#container");
const containerWidth = document.getElementById("container").clientWidth;
const button = document.querySelector("button");

let numOfSq = 16;

function clearContainer() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function createSquares() {
    clearContainer();
    for (i = 0; i < numOfSq**2; i++){
        const sq = document.createElement("div");
        sq.classList.add("sqDiv");
        sq.style.width = `${containerWidth / numOfSq}px`;
        container.appendChild(sq);
    }
}

function recalculateSquares() {
    let userInput = prompt("How many per side do you want?");
    numOfSq = userInput;
}

button.addEventListener("click", () => {
    recalculateSquares();
    createSquares();
});

createSquares();



