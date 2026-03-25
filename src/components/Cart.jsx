import React from 'react'
import Usercontext from './Context'
import { useContext } from 'react'

const Cart = () => {
  const {cart,setcart}=useContext(Usercontext)
  return(
    <>
  <div className='w-full flex flex-wrap justify-center gap-10 m-10'>
    {cart.map((item,id)=>{
        return <div key={id} className="card border-2 border-black rounded-2xl mt-20 h-100 w-55 hover:scale-110">
        <img className='w-full h-80 rounded-t-2xl' src={item.image} alt="" />
        <div className='text-2xl'>{item.name}</div>
        <div className='flex items-center gap-3'>
            <div className="price text-2xl ">Price:${item.new_price}</div>
            <div className="oldprice text-2xl line-through text-gray-700">${item.old_price}</div>
        </div>
         <div className='text-xl'>
  Quantity: {item.quantity}
</div>
<div className="text-xl">
  Total: ${item.new_price * item.quantity}
</div>
        <button 
         className='text-2xl flex justify-center items-center bg-red-700 h-10 mt-3 w-full rounded-2xl '>Proceed</button>
      
      </div>
    
    })}
    </div>
   
    <div className="total text-3xl mt-10 ">Total Amount:$</div>
    <label className="flex items-center gap-2">
  <input type="checkbox" />
  COD
</label>
    </>
  ) 
}

export default Cart
