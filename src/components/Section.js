import React from 'react'
import Square from './Square'

export default function Section({backgroundColor, xmin,ymin,sodoku}) {
  return (
    <div className={`section ${backgroundColor}`}>
        <Square x={xmin} y={ymin} sodoku={sodoku}/>
        <Square x={xmin} y={ymin + 1} sodoku={sodoku}/>
        <Square x={xmin} y={ymin + 2} sodoku={sodoku}/>
        <Square x={xmin +1} y={ymin} sodoku={sodoku}/>
        <Square x={xmin +1} y={ymin + 1} sodoku={sodoku}/>
        <Square x={xmin +1} y={ymin + 2} sodoku={sodoku}/>
        <Square x={xmin +2} y={ymin} sodoku={sodoku}/>
        <Square x={xmin +2} y={ymin + 1} sodoku={sodoku}/>
        <Square x={xmin +2} y={ymin + 2} sodoku={sodoku}/>
    </div>
  )
}
