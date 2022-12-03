//Helper Functions
//Function Returns numbers in specified Row
function getRow(puzzle, row) {
  return puzzle[row];
}

//Function returns numbers in specified column
function getColumn(puzzle, col) {
  let column = [];
  for (let i = 0; i < puzzle.length; i++){
      column.push(puzzle[i][col]);
  }
  return column;
}
//Function returns cells on board
let getSquareIndexes = (num) => {
  if (num === 0) {
    return [0,1,2];
  } else if (num === 1) {
    return [3,4,5];
  } else if (num === 2){
    return [6,7,8];
  }
}
//Returns all numbers in specified cell
function getSection(puzzle, x, y) {

  let values = [],
      rows = getSquareIndexes(y),
      columns = getSquareIndexes(x);

  rows.forEach(row => {
    columns.forEach(column => {
      values.push(puzzle[row][column]);
    });
  });

  return values;
    
}
//Checks if function includes numbers 1-9
function includes1To9(arr) {
  //Write a function includes1to9 that takes in arr that accomplishes this. This function should return a boolean.
    let sum = arr.reduce((a, b) => a + b, 0);

    if (sum === 45){
        return true;
    } else {
        return false;
    }

}

//Checks if Rows and Columns are valid

let rowsAndColsValid = (puzzle) => {
    for (let i = 0; i < 8; i++){
       if (includes1To9(getRow(puzzle, i)) && includes1To9(getColumn(puzzle, i)) === true){
           return true;
        } else {
            return false;
        }
    }
}

//Checks if cells are valid

let sectionValid = (puzzle) => {
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            if (includes1To9(getSection(puzzle, i, j)) === true){
                return true;
            } else {
                return false;
            }
        }
    }
}

//Final function to check if puzzle is true
export function sudokuIsValid(puzzle) {
  // This function is to determine whether or not our sudoku puzzle has the values of 1-9 through each row and within each sub-grid with no repeats. The function will accept a sudoku puzzle and should return a boolean.

    if (rowsAndColsValid(puzzle) === true && sectionValid(puzzle) === true){
        return true;
    } else {
        return false;
    }

}