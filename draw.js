// set up the whole grid size
const REAL_WIDTH = 480;

// this will become default value
let WIDTH = 16;
let HEIGHT = 16;
// get the grid container
const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i<WIDTH; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j<HEIGHT; j++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.width = REAL_WIDTH / (WIDTH) + 1 + "px";
            block.style.height = REAL_WIDTH / (HEIGHT) + 1 + "px";
            console.log(REAL_WIDTH / WIDTH);
            row.appendChild(block);
        }
        container.appendChild(row);
    }
    monitorMouse();
}

createGrid();


// implement change color - black for now
function changeColor(e) {
    // console.log(e.buttons == 1);
    if (e.buttons == 1) {
        let cur = document.querySelector('.block:hover');
        cur.style.backgroundColor = "black";
    } 
}

// reset button function
const button = document.querySelector("#reset");
button.addEventListener("click", () => {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.style.backgroundColor = "";
    })
});

// enter grid size button funtion - initiate a prompt
const sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Customize your own grid size"));
    if (gridSize > 48) {
        alert("Please only enter a number under 48.");
        gridSize = 16;
    }
    WIDTH = gridSize? gridSize:16;
    HEIGHT = WIDTH;
    updateGrid();
})

// update grid size
function updateGrid() {
    // blocks.forEach(block => block.remove());
    const row = document.querySelectorAll(".container .row");
    row.forEach(r => container.removeChild(r));
    createGrid();
}

// this will be implemented everytime a new grid has created
function monitorMouse() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => block.addEventListener("mouseover", changeColor));
}
