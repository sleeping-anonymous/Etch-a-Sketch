const container = document.querySelector(".container");
const btn = document.querySelector("button");
const clr = document.querySelector(".clear");
const opaInc = document.querySelector(".opacity");

let darkHover = false;


function createGrid(size) {
    container.innerHTML = "";
    const gridSize = 100 / size;  // to calculate in percentage size to be provided for each grid 
    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement("div");
        grid.style.height = `${gridSize}%`;
        grid.style.width = `${gridSize}%`;
        container.appendChild(grid);
        grid.classList.add("grid");

        grid.setAttribute("data-opacity", 0);

        grid.addEventListener("mouseenter", hoverMouse);  //have to apply in loop for every grid otherwise e.target.classList.contains("") for container

    }
}
createGrid(16);

function hoverMouse(e) {
    const cell = e.target;
    if (darkHover) {
        let opacity = parseFloat(cell.getAttribute("data-opacity"));
        if (opacity < 1) {
            opacity += 0.1;
            cell.setAttribute("data-opacity", opacity.toFixed(1));
            cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity.toFixed(1)})`;
        }
    }
    else {
        e.target.style.backgroundColor = randomColorGenerator();
        cell.dataset.opacity = "0";
    }
}

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `rgb(${red},${blue},${green})`;
}


btn.addEventListener("click", function (e) {
    let input = parseInt(prompt("Enter the new size for grid (max 100)"));
    while (isNaN(input) || input > 100 || input < 1) {
        alert("Wrong Input! Try Again");
        input = parseInt(prompt("Enter the new size for grid (max 100)"));
        console.log(typeof input);

    }
    createGrid(input);
})

function opacityInc() {
    const cells = document.querySelectorAll(".grid");
    cells.forEach(function (cell) {
        cell.style.backgroundColor = "white";
    })
}

clr.addEventListener("click", function () {
    // createGrid(16);  lets keep grid size same

    const cells = document.querySelectorAll(".grid");
    cells.forEach(function (cell) {
        cell.style.backgroundColor = "white";
    })
});

opaInc.addEventListener("click", () => {
    if (darkHover) {
        darkHover = false;
        opaInc.textContent = "Darkening";
    }
    else {
        darkHover = true;
        opaInc.textContent = "Stop Darkening";

    }
});

