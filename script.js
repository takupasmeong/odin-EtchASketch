const container = document.querySelector(".container");

// Button to set Grid size
const setGrid = document.querySelector("#setGrid");

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 16; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        
        container.appendChild(row);
    }
});

container.addEventListener("mouseover", (event) => {
    const target = event.target;

    if (target == event.currentTarget || target.classList.contains("row")) {
        return;
    }

    let rgb = [];

    for (let i = 0; i < 3; i++) {
        let randNum = Math.floor(Math.random() * 256);
        rgb.push(randNum);
    }

    if (target.style.backgroundColor == "") {
        target.style.backgroundColor = `rgb(${rgb})`;
    } else {
        return;
    }
    
});

setGrid.addEventListener("click", () => {
    clearGrid(container);
    addGrid();
});

function addGrid() {
    let numGrid = Number(prompt("Grid size?", "30"));

    if (isNaN(numGrid)) {
        alert("Not a number");
        location.reload();
        return;
    } else if (numGrid > 100) {
        alert("Too large!! Max is 100");
        location.reload();
        return;
    }
    for (let i = 0; i < numGrid; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < numGrid; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        
        container.appendChild(row);
    }
}

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}