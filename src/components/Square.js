import React, { useState } from 'react'

function Square({x, y,sudoku, setSudoku}) {

    const [number, setNumber] = useState(0)

    const changeNumber = (num) => {
        //setNumber(num)
        console.log('Coordinates: ' + x + ',' + y)
        const updatedArr = sudoku.map((arr, index) => {
            if (index !== x) {
                return arr
            } else {
                return arr.map((val, index) => {
                    if (index !== y) {
                        return val
                    } else {
                        setNumber(num)
                        return num
                    }
                })
            }
        })
        setSudoku(updatedArr)
        console.log(sudoku)
    }

  return (
    <div className='square'>
        {number ? 
        <div className='number'>
            <h2 onClick={() => changeNumber(0)}>{number}</h2>
        </div> :
        <div className='numbers'>
            <p onClick={() => changeNumber(1)} >1</p>
            <p onClick={() => changeNumber(2)}>2</p>
            <p onClick={() => changeNumber(3)}>3</p>
            <p onClick={() => changeNumber(4)}>4</p>
            <p onClick={() => changeNumber(5)}>5</p>
            <p onClick={() => changeNumber(6)}>6</p>
            <p onClick={() => changeNumber(7)}>7</p>
            <p onClick={() => changeNumber(8)}>8</p>
            <p onClick={() => changeNumber(9)}>9</p>
        </div>}
    </div>
  )
}

export default Square