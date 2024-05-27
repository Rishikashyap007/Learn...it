import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({text}) => {
  return (
    <div className='bg-[rgb(202,77,255)]  w-fit py-[6px] text-white px-3 rounded-md text-xl hover:bg-blue-800'><Link to='/About-us'>{text}</Link></div>
  )
}

export default Button