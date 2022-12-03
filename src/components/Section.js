import React from 'react'
import Square from './Square'

export default function Section({backgroundColor}) {
  return (
    <div className={`section ${backgroundColor}`}>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </div>
  )
}
