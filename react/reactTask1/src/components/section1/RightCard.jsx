import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full w-70 overflow-hidden relative rounded-3xl'>
       <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
       <RightCardContent/>
    </div>
  )
}

export default RightCard
