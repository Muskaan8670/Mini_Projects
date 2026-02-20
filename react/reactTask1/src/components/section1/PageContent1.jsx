import React from 'react'
import Right from './Right.jsx'
import Left from './Left.jsx'

const PageContent1 = (props) => {
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] px-18 '>
       <Left/>
       <Right users={props.users}/>
    </div>
  )
}

export default PageContent1
