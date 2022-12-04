import React from 'react'
import Section from './Section'

export default function Board({ sodoku}) {
  return (
    <div className='board'>
        <Section backgroundColor="white"  xmin={0}  ymin={0}  sodoku={sodoku}/>
        <Section backgroundColor="blue"  xmin={0}  ymin={3}  sodoku={sodoku}/>
        <Section backgroundColor="blue" xmin={0}  ymin={6}  sodoku={sodoku}/>
        <Section backgroundColor="white"  xmin={3}  ymin={0}  sodoku={sodoku}/>
        <Section backgroundColor="blue"  xmin={3}  ymin={3}  sodoku={sodoku}/>
        <Section backgroundColor="white"  xmin={3}  ymin={6}  sodoku={sodoku}/>
        <Section backgroundColor="blue"  xmin={6}  ymin={0}  sodoku={sodoku}/>
        <Section backgroundColor="white"  xmin={6}  ymin={3}  sodoku={sodoku}/>
        <Section backgroundColor="blue"  xmin={6}  ymin={6}  sodoku={sodoku}/>
    </div>
  )
}
