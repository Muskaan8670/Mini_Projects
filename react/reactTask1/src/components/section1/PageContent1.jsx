import React from 'react'
import Right from './Right.jsx'
import Left from './Left.jsx'

const PageContent1 = () => {
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] px-18 '>
       <Left/>
       <Right/>
    </div>
  )
}

export default PageContent1
