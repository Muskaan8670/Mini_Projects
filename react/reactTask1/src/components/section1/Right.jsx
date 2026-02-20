import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-3 text-3xl flex flex-nowrap gap-5 overflow-x-auto '>
        {
          props.users.map(function(e){
             return <RightCard img={e.img} tag={e.tag}/>
          })
        }
        <div></div>
    </div>
  )
}

export default Right
