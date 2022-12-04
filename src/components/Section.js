import React from 'react'
import Square from './Square'

export default function Section({backgroundColor, xmin,ymin,sudoku, setSudoku}) {
  return (
    <div className={`section ${backgroundColor}`}>
        <Square setSudoku={setSudoku} x={xmin} y={ymin} sudoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin} y={ymin + 1} sudoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin} y={ymin + 2} sodoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin +1} y={ymin} sodoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin +1} y={ymin + 1} sodoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin +1} y={ymin + 2} sudoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin +2} y={ymin} sudoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin +2} y={ymin + 1} sudoku={sudoku}/>
        <Square setSudoku={setSudoku} x={xmin +2} y={ymin + 2} sudoku={sudoku}/>
    </div>
  )
}
