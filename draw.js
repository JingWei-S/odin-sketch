// this will become static
const WIDTH = 16;
const HEIGHT = 16;
// get the grid container
const container = document.querySelector(".container");

for (let i = 0; i<WIDTH; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j<HEIGHT; j++) {
        const block = document.createElement("div");
        block.classList.add("block");
        row.appendChild(block);
    }
    container.appendChild(row);
}

const blocks = document.querySelectorAll(".block");
blocks.forEach(block => block.addEventListener("mouseover", changeColor));


// implement change color - black for now
function changeColor(e) {
    // console.log(e.buttons == 1);
    if (e.buttons == 1) {
        let cur = document.querySelector('.block:hover');
        cur.style.backgroundColor = "black";
    } 
}

const button = document.querySelector("button");
button.addEventListener("click", () => location.reload());