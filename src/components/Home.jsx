import React from 'react'
import Model from '../assets/Modelnew2.png'
import PopularW from "./PopularW"
const Home = () => {
  return (
    <>
    <div className='flex justify-between h-screen w-full px-15 pt-10 text-5xl bg-gradient-to-b from-green-400 to-white'>
      <div className='pt-20 flex flex-col gap-3'>
          <p className=" font-semibold text-3xl">
    Best Deals ! Best Prices !
  </p>

  <h1 className="text-6xl font-bold">
    new 👋
  </h1>

  <h1 className="text-6xl font-bold">
    collections
  </h1>

  <h1 className="text-6xl font-bold">
    for everyone
  </h1>
    <button className='text-2xl bg-red-400 rounded-3xl h-15 w-90 mt-4'>Latest Collection</button>
      </div>
      <img src={Model} alt="Model" />
    </div>
     <PopularW/>
     </>
  )
}

export default Home
