import React from 'react'
import Square from './Square'

export default function Section({backgroundColor, setSodoku}) {
  return (
    <div className={`section ${backgroundColor}`}>
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
        <Square setSodoku={setSodoku} />
    </div>
  )
}
