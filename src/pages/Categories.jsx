import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function Categories() {
  return (
    <>
      <Navbar/>

      <div className='flex gap-10 justify-center items-center p-8'>


        <div className='flex flex-col gap-5 justify-center items-center'>
          <img src="/all pdt.webp" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
          <p className='font-bold text-xl text-[#00000070] hover:text-[#000000] duration-300'>All Games</p>
        </div>

        <div className='flex flex-col gap-5 justify-center items-center'>
          <img src="/bestSeller.webp" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
          <p className='font-bold text-xl text-[#00000070] hover:text-[#000000] duration-300'>Best Seller Games</p>
        </div>

        <div className='flex flex-col gap-5 justify-center items-center'>
          <img src="/pc Games.webp" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
          <p className='font-bold text-xl text-[#00000070] hover:text-[#000000] duration-300'>PC Games</p>
        </div>

      </div>

      <Footer/>
    </>
  )
}

export default Categories
