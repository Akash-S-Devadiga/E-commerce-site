import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-25 p-5 w-full flex justify-center bg-white items-center  '>
      <div className='px-5 flex justify-between items-center text-4xl w-25 h-20  w-[1200px] mx-auto'>
        <div>Shopifyy</div>
        <div>
          <ul className='flex justify-center items-center w-full gap-5 '>
            <li><Link to='/'> Home</Link> </li>
            <li><Link to='/mens'> Mens</Link> </li>
            <li><Link to='/womens'> Womens</Link> </li>
          </ul>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <h3><Link to='/login'>Login</Link></h3>
          <h3><Link to='/cart'> Cart</Link></h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
