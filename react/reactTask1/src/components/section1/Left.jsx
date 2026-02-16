import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'

const Left = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      <Hero/>
      <Arrow/>
    </div>
  )
}

export default Left
