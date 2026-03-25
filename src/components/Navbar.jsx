import React from 'react'
import { Link } from 'react-router-dom'
import Usercontext from './Context'
import { useContext } from 'react'

const Navbar = () => {
  const {count,setcount}=useContext(Usercontext)
  return (
    <div className='fixed h-25 p-5 w-full flex justify-center bg-white items-center  '>
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
          <h3><Link to='/cart'> Cart<sup className='bg-red-700 rounded-full'>{count}</sup></Link></h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar
