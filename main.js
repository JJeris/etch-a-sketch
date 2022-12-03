function getRow(){
    /* Creates a div with a class of 'row'. */
    
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function getColumn(){
    /* Creates a div with a class of 'column'. */
    
    const column = document.createElement('div');
    column.classList.add('column');
    return column;
}

function getDiv() {
    /* Create a div with a class of 'grid-div'. */ 
    
    const div = document.createElement('div');
    div.classList.add('grid-div');
    return div;
}

function createGrid () {
    /* Creates the 16X16 grid of divs. */ 

    const container = document.querySelector('.container');
    let counter = 1;
    for (let i = 1; i <= 16; i++) {
        row = getRow();

        for (let j = 1; j <= 16; j++) {
            column = getColumn();
            div = getDiv();

            // div.textContent = counter++;
            column.appendChild(div);
            row.appendChild(column);
        }
        container.appendChild(row);
    }

   
}


function paintGrid(){
    const divs = document.querySelectorAll('.grid-div');
    
    divs.forEach((div) => 
    div.addEventListener(('mouseover'), () => {
        div.classList.add('coloured');
    }));

}


createGrid();

paintGrid();




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

