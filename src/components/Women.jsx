import React from 'react'
import banner from '../assets/women_banner.avif'
const Women = () => {
  return (
   <div className='h-screen w-full px-15 pt-10 text-5xl bg-gradient-to-b from-green-400 to-white'>
   <div className='h-120 w-full '>
         <img className='w-full h-120' src={banner} alt="" />
       </div>
    </div>
  )
}

export default Women
