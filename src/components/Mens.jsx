import React from 'react'
import banner from '../assets/banner.jpg'
import all_product from '../assets/all_product'
const Mens = () => {

  const men=all_product.filter((item,id)=>item.category=="men")
  return (
    <div className='h-screen w-full px-15 pt-10 text-5xl bg-gradient-to-b from-green-400 to-white'>
    <div className='h-120 w-full '>
      <img className='w-full h-120' src={banner} alt="" />
    </div>
     <div className='h-250 w-full mt-20 flex justify-center flex-wrap gap-10  '>
    {men.map((item,id)=>{
        return <div className="card border-2 border-black rounded-2xl h-100 w-55 hover:scale-110">
        <img className='w-full h-80 rounded-t-2xl' src={item.image} alt="" />
        <div className='text-2xl'>{item.name}</div>
        <div className='flex items-center gap-3'>
            <div className="price text-2xl ">Price:${item.new_price}</div>
            <div className="oldprice text-2xl line-through text-gray-700">${item.old_price}</div>
        </div>
      </div>
  
    })}
    </div>

    </div>
  )
}

export default Mens
