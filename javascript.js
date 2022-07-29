function makeGrid(size){
    container.style.setProperty("--size", size);
    for(let i = 0; i < size*size; i++){
        const pix = document.createElement('div');
        pix.classList.add('pixel');
        container.appendChild(pix);
        pix.addEventListener("mouseover", draw);
        pix.addEventListener("mousedown", draw);
    }
}

function draw(e){
    if(!drawing){
        return;
    }
    e.target.style.backgroundColor = colour.value;
}

function resetGrid(){
    container.innerHTML = '';
    size = gridSize.value;
    makeGrid(size);
}

let drawing = false;
const container = document.querySelector(".container");
const gridSize = document.querySelector(".size");
const reset = document.querySelector(".reset");
let size = gridSize.value;
const colour = document.querySelector(".cselect")
gridSize.addEventListener("change", resetGrid);
reset.addEventListener("click", resetGrid);

window.addEventListener("mousedown", function(){
    drawing = true;
})

window.addEventListener("mouseup", function(){
    drawing = false;
})

makeGrid(size);