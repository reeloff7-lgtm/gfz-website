import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

function Categories() {
  return (
    <div className='h-screen'>
      <Navbar/>

      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center items-center p-8 m-auto max-w-[50%] min-h-[90%]'>


        {/* <Link to='/games'>
          <div className='flex flex-col gap-5 justify-center  items-center'>
            <img src="/all pdt.webp" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
            <p className='font-bold text-xl text-[#ffffff70] hover:text-white duration-300'>All Games</p>
          </div>
        </Link>

        <Link to='/best'>
          <div className='flex flex-col gap-5 justify-center  items-center'>
            <img src="/bestSeller.webp" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
            <p className='font-bold text-xl text-[#ffffff70] hover:text-white duration-300'>Best Seller Games</p>
          </div>
        </Link> */}

        <Link to='/pc'>
          <div className='flex flex-col gap-5 justify-center  items-center'>
            <img src="/pc Games.webp" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
            <p className='font-bold text-xl text-[#ffffff70] hover:text-white duration-300'>PC Games</p>
          </div>
        </Link>

        <Link to='/playStation'>
          <div className='flex flex-col gap-5 justify-center  items-center'>
            <img src="/Playstation.jpg" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
            <p className='font-bold text-xl text-[#ffffff70] hover:text-white duration-300'>PlayStation Games</p>
          </div>
        </Link>

        <Link to='/ott'>
          <div className='flex flex-col gap-5 justify-center  items-center'>
            <img src="/Ott.jpg" alt="" className='h-50 aspect-square rounded-xl border-2 border-[#00000050] '/>
            <p className='font-bold text-xl text-[#ffffff70] hover:text-white duration-300'>OTT</p>
          </div>
        </Link>

      </div>

      <Footer/>
    </div>
  )
}

export default Categories
