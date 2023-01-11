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
