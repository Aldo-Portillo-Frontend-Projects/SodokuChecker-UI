import React, { useState } from 'react'

function Square({x, y,sodoku}) {

    const [number, setNumber] = useState(0)

    const changeNumber = (num) => {
        setNumber(num)
        sodoku[x][y] = num
        console.log(sodoku)
    }
    
  return (
    <div className='square'>
        {number ? 
        <div className='number'>
            <h2 onClick={() => setNumber()}>{number}</h2>
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