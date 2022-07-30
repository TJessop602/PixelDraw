function makeGrid(size){
    container.style.setProperty("--size", size);
    for(let i = 0; i < size*size; i++){
        const pix = document.createElement('div');
        pix.classList.add('pixel');
        container.appendChild(pix);
        pix.addEventListener("mousedown", draw);
        pix.addEventListener("mouseover", draw);
    }
}

function draw(e){
    e.preventDefault();
    if(!drawing){
        return;
    }
    if(!erasing){
        e.target.style.backgroundColor = colour.value;
    }else{
        e.target.style.backgroundColor = "white"
    }
}

function resetGrid(){
    container.innerHTML = '';
    size = gridSize.value;
    makeGrid(size);
}

let drawing = false;
let erasing = false;
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

window.addEventListener("keydown", (event) => {
    if(event.code = "ControlLeft"){
        erasing = true;
    }
})

window.addEventListener("keyup", (event) => {
    if(event.code = "ControlLeft"){
        erasing = false;
    }
})

makeGrid(size);