import React from "react";
import { sudokuIsValid } from "./algo/main";
import Board from "./components/Board";

function App() {
  const sodoku1 = [
    [ 8,9,5,   7,4,2,   1,3,6 ],
    [ 2,7,1,   9,6,3,   4,8,5 ],
    [ 4,6,3,   5,8,1,   7,9,2 ],

    [ 9,3,4,   6,1,7,   2,5,8 ],
    [ 5,1,7,   2,3,8,   9,6,4 ],
    [ 6,8,2,   4,5,9,   3,7,1 ],

    [ 1,5,9,   8,7,4,   6,2,3 ],
    [ 7,4,6,   3,2,5,   8,1,9 ],
    [ 3,2,8,   1,9,6,   5,4,7 ]]

    const sodoku = [
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
  
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
  
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],
      [ 0,0,0,0,0,0,0,0,0 ],]

    console.log(sodoku)
  return (
    <div className="App">
      <h1>Sodoku Checker</h1>
      <Board sodoku={sodoku}/>
      <h2>The Game is {sudokuIsValid(sodoku) ? "Complete" : "Incomplete"}</h2>
    </div>
  );
}

export default App;
