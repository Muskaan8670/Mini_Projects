import React from 'react'
import './index.css';
const Card = (props) => {
  return (
        <div className="bg-white text-black p-10 max-w-70 flex shadow-neutral-400 shadow-md rounded-md flex flex-col">
            <div className='flex flex-col justify-center items-center '>
                <img src={props.profilePhoto} alt="Photo" className='rounded-full ' />
                <h1 className='font-medium text-2xl'>{props.fullName}</h1>
                <h3>{props.designation}</h3>
                <p className='text-center'>{props.description}</p>
            </div>
            <div className='flex justify-around '>
                <p>{props.likeCount}</p>
                <p>{props.followCount}</p>
            </div>
            
        </div>
   )
}
export default Card
