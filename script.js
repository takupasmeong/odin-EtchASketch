const container = document.querySelector(".container");

let count = 1;
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.textContent = count++;
        row.appendChild(box);
    }
    
    container.appendChild(row);
}

container.addEventListener("mouseover", (event) => {
    const target = event.target;

    if (target == event.currentTarget || target.classList.contains("row")) {
        return;
    }

    target.style.backgroundColor = "red";
    target.style.color = "white";
});