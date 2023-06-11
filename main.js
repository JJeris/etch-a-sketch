function createGrid(rows = 8, cols = rows){
    console.log("OK")
    for(let i = 0; i<rows; i++){
        for(let j = 0; j<cols; j++){
            process.stdout.write("*  ")
        }
        console.log()
    }
}
createGrid(8)
