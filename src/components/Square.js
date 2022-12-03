import React, { useState } from 'react'

function Square() {

    const [number, setNumber] = useState()
  return (
    <>
    <p>Current Number {number}</p>
    <div className='square'>
        {number ? 
        <div className='number'>
            <h2 onClick={() => setNumber()}>{number}</h2>
        </div> :
        <div className='numbers'>
            <p onClick={() => setNumber(1)}>1</p>
            <p onClick={() => setNumber(2)}>2</p>
            <p onClick={() => setNumber(3)}>3</p>
            <p onClick={() => setNumber(4)}>4</p>
            <p onClick={() => setNumber(5)}>5</p>
            <p onClick={() => setNumber(6)}>6</p>
            <p onClick={() => setNumber(7)}>7</p>
            <p onClick={() => setNumber(8)}>8</p>
            <p onClick={() => setNumber(9)}>9</p>
        </div>}
    </div>
    </>
  )
}

export default Square