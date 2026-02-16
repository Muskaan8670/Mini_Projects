import React from 'react'
import RightCard from './RightCard'

const Right = () => {
  return (
    <div className='h-full w-2/3 p-4 text-3xl flex gap-8 '>
        <RightCard/>
        <RightCard/>
        <RightCard/>
        <div></div>
    </div>
  )
}

export default Right
