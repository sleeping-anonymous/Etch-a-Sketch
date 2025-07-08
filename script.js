const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = "";
    const gridSize = 100 / size;  // to calculate in percentage size to be provided for each grid 
    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement("div");
        grid.style.height = `${gridSize}%`;
        grid.style.width = `${gridSize}%`;
        container.appendChild(grid);
        grid.classList.add("grid");

        grid.addEventListener("mouseenter", hoverMouse);  //have to apply in loop for every grid otherwise e.target.classList.contains("") for container

    }
}


createGrid(16);

function hoverMouse(e) {
    e.target.style.backgroundColor = "blue";
}
