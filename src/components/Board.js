import React from 'react'
import Section from './Section'

export default function Board({setSodoku}) {
  return (
    <div className='board'>
        <Section backgroundColor="blue" setSodoku={setSodoku}/>
        <Section backgroundColor="white" setSodoku={setSodoku}/>
        <Section backgroundColor="blue" setSodoku={setSodoku}/>
        <Section backgroundColor="white" setSodoku={setSodoku}/>
        <Section backgroundColor="blue" setSodoku={setSodoku}/>
        <Section backgroundColor="white" setSodoku={setSodoku}/>
        <Section backgroundColor="blue" setSodoku={setSodoku}/>
        <Section backgroundColor="white" setSodoku={setSodoku}/>
        <Section backgroundColor="blue" setSodoku={setSodoku}/>
    </div>
  )
}
