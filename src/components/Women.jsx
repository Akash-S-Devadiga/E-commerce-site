import React from 'react'
import banner from '../assets/women_banner.avif'
import all_product from '../assets/all_product'
import Usercontext from './Context'
import { useContext } from 'react'
const Women = () => {

  const {cart,setcart}=useContext(Usercontext)
  const setdata = (item) => {
  const existingItem = cart.find((i) => i.id === item.id)

  if (existingItem) {
    // If item already exists → increase quantity
    const updatedCart = cart.map((i) =>
      i.id === item.id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    )
    setcart(updatedCart)
  } else {
    // If new item → add with quantity 1
    setcart([...cart, { ...item, quantity: 1 }])
  }

  setcount((prev) => prev + 1)
}

   const women=all_product.filter((item,id)=>item.category=="women")
  return (
   <div className='h-screen w-full px-15 pt-10 text-5xl bg-gradient-to-b from-green-400 to-white'>
   <div className='h-120 w-full '>
         <img className='w-full h-120' src={banner} alt="" />
       </div>
        <div className='h-full mt-20 w-full flex justify-center flex-wrap gap-10'>
    {women.map((item,id)=>{
        return <div className="card border-2 border-black rounded-2xl h-100 w-55 hover:scale-110 ">
        <img className='w-full h-80 rounded-t-2xl' src={item.image} alt="" />
        <div className='text-2xl'>{item.name}</div>
        <div className='flex items-center gap-3'>
            <div className="price text-2xl ">Price:${item.new_price}</div>
            <div className="oldprice text-2xl line-through text-gray-700">${item.old_price}</div>
        </div>
        <button 
          onClick={()=>setdata(item)}
        className='text-2xl flex justify-center items-center bg-red-700 h-10 mt-3 w-full rounded-2xl '>Add to cart</button>
      
      </div>
  
    })}
    </div>

    </div>
  )
}

export default Women
