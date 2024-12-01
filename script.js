const container = document.querySelector("#container");
const containerWidth = document.getElementById("container").clientWidth;
const button = document.querySelector("button");

let numOfSq = 16;
console.log(containerWidth);

function createSquares() {
    for (i = 0; i < numOfSq**2; i++){
        const sq = document.createElement("div");
        sq.classList.add("sqDiv");
        sq.style.width = `${containerWidth / numOfSq}px`;
        container.appendChild(sq);
    }
}

createSquares();



