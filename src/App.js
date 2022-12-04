import React, { useState } from "react";
import { sudokuIsValid } from "./algo/main";
import Board from "./components/Board";

function App() {
    const [sudoku, setSudoku] = useState([
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
  
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
  
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],])
    
  return (
    <div className="App" styles={{backgroundColor: "green"}}>
      <h1>Sudoku Checker</h1>
      <Board sudoku={sudoku} setSudoku={setSudoku}/>
      <h2>The Game is {sudokuIsValid(sudoku) ? "Complete" : "Incomplete"}</h2>
    </div>
  );
}

export default App;
