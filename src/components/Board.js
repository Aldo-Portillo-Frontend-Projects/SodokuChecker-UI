import React from 'react'
import Section from './Section'

export default function Board({ setSudoku, sudoku}) {
  return (
    <div className='board'>
        <Section setSudoku={setSudoku} backgroundColor="blue"  xmin={0}  ymin={0}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="white"  xmin={0}  ymin={3}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="blue" xmin={0}  ymin={6}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="white"  xmin={3}  ymin={0}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="blue"  xmin={3}  ymin={3}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="white"  xmin={3}  ymin={6}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="blue"  xmin={6}  ymin={0}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="white"  xmin={6}  ymin={3}  sudoku={sudoku}/>
        <Section setSudoku={setSudoku} backgroundColor="blue"  xmin={6}  ymin={6}  sudoku={sudoku}/>
    </div>
  )
}
