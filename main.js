let color = "black";
let click = false;

function changeColor(choice) {
    color = choice;
}


function getDiv() {
    /* Create a div with a class of 'grid-div'. */ 
    
    const div = document.createElement('div');
    div.classList.add('grid-div');
    div.style.backgroundColor = "white";
    // div.style.border = "1px solid red";
    return div;
}
function changeSize(size) {
    /* Sets a cusstom size to the canvas. */
    if (size >= 2 && size <= 100) {
        deleteBoard();
        populateBoard(size)
    }
    else {
        console.log("ERORR: Too many squares.");
        return;
    }

}

function deleteBoard() {
    /* Deletes existing board. */
    const board = document.querySelector(".board");
    // board.textContent = "";
    let squares = board.querySelectorAll(".grid-div");
    squares.forEach((div) => div.remove());
}

function colorSquare() {

    if (click == true){
        if (color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function hoverSquare(square) {
    square.addEventListener("mouseover", colorSquare);
    // square.addEventListener("click", colorSquare);
        // square.addEventListener("mouseover", ()=> {
    //     square.style.backgroundColor = color;

    // });
    // ['click','mouseover'].forEach( event => 
        // square.addEventListener(event, colorSquare, true)
    // );
}



function resetBoard() {
    const board = document.querySelector(".board");
    let squares = board.querySelectorAll(".grid-div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

function populateBoard(size = 16) {
    const board = document.querySelector(".board");
    // let squares = board.querySelectorAll("div");
    // squares.forEach((div) => div.remove());
    deleteBoard();
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let square = getDiv();

        hoverSquare(square);

        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

document.querySelector(".board").addEventListener("mousedown", () => {
    click = true;
});

document.querySelector(".board").addEventListener("mouseup", () => {
    click = false;
});

// document.addEventListener('drag', (e) => e.preventDefault)

populateBoard(16)
















// // FLEXBOX
// function getRow(){
//     /* Creates a div with a class of 'row'. */
    
//     const row = document.createElement('div');
//     row.classList.add('row');
//     return row;
// }

// function getColumn(){
//     /* Creates a div with a class of 'column'. */
    
//     const column = document.createElement('div');
//     column.classList.add('column');
//     return column;
// }

// function getDiv() {
//     /* Create a div with a class of 'grid-div'. */ 
    
//     const div = document.createElement('div');
//     div.classList.add('grid-div');
//     return div;
// }

// function changeSize() {
//     /* Sets a cusstom size to the canvas. */
    
//     const size = document.querySelector('#size');
//     createGrid(size, size);
// }

// function createGrid (x = 16, y = 16) {
//     /* Creates the 16X16 grid of divs. */ 

//     const container = document.querySelector('.container');
//     let counter = 1;
//     for (let i = 1; i <= y; i++) {
//         row = getRow();

//         for (let j = 1; j <= x; j++) {
//             column = getColumn();
//             div = getDiv();

//             // div.textContent = counter++;
//             column.appendChild(div);
//             row.appendChild(column);
//         }
//         container.appendChild(row);
//     }  
// }


// function paintGrid(){
//     const divs = document.querySelectorAll('.grid-div');
    
//     divs.forEach((div) => 
//     div.addEventListener(('mouseover'), () => {
//         div.classList.add('coloured');
//     }));

// }


// // createGrid();

// // paintGrid();




// function pasteDiv() {
//     /*  */ 

//     const container = document.querySelector('.container');

//     for (let i = 1; i <= 256; i++){
//         const div = getDiv();
//         div.textContent = i;
//         container.appendChild(div);
//     }
// }
// pasteDiv();


// function createRow() {
//     for (let k = 1; k <= 8; k++){
//         console.log(`column ${k} msg`)
//     }    
// }

// for (let j = 1; j <= 16; j++){
//     console.log(`row ${j} `)
//     createRow();
// }

 // for (let i = 1; i <= 256; i++){
    //     const div = getDiv();
    //     div.textContent = i;
    //     container.appendChild(div);
    // }

