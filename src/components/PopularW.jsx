import React from 'react'
import data_product from '../assets/data'
const PopularW = () => {
  return (
    <>
     <div className='underline flex justify-center mt-25 text-5xl underline'>POPULAR IN WOMEN</div>
     <div className='h-400 w-full flex justify-center flex-row gap-10  '>
    {data_product.map((item,id)=>{
        return <div className="card border-2 border-black rounded-2xl mt-20 h-100 w-55 hover:scale-110">
        <img className='w-full h-80 rounded-t-2xl' src={item.image} alt="" />
        <div className='text-2xl'>{item.name}</div>
        <div className='flex items-center gap-3'>
            <div className="price text-2xl ">Price:${item.new_price}</div>
            <div className="oldprice text-2xl line-through text-gray-700">${item.old_price}</div>
        </div>
      </div>
  
    })}
    </div>
    </>
  )
}

export default PopularW
