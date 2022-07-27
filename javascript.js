function makeGrid(size){
    container.style.setProperty("--size", size);
    for(let i = 0; i < size*size; i++){
        const pix = document.createElement('div');
        pix.classList.add('pixel');
        container.appendChild(pix);
    }
}

function resetGrid(){
    container.innerHTML = '';
    size = gridSize.value;
    makeGrid(size);
}

const container = document.querySelector(".container");
const gridSize = document.querySelector(".size");
const reset = document.querySelector(".reset");
let size = gridSize.value;

gridSize.addEventListener("change", resetGrid);
reset.addEventListener("click", resetGrid);

makeGrid(size);