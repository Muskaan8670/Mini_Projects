import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-70 shrink-0 overflow-hidden relative rounded-3xl'>
       <img className='h-full w-full object-cover' src={props.img}/>
       <RightCardContent tag={props.tag}/>
    </div>
  )
}

export default RightCard
