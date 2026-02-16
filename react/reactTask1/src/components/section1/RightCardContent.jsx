import React from 'react'

const RightCardContent = () => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
         <h2 className='bg-white rounded-full font-semibold text-xl h-10 w-10 flex justify-center items-center'>1</h2>
         <div>
            <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat quasi totam explicabo ex error?</p>
            <div className='flex justify-between'>
                <button className='text-white bg-blue-400 rounded-full font-medium text-xl px-5 py-1.5'>Satisfied</button>
                <button className='text-white bg-blue-400 rounded-full font-light text-xl px-3 py-1.5'><i class="ri-arrow-right-line"></i></button>
            </div>
         </div>
       </div>
  )
}

export default RightCardContent
