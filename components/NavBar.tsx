"use client";

import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=' w-full flex justify-between py-2 px-4 pt-3'>
        <div className='gap-8 flex flex-row items-center'>
            <Image
            src='/realmlogo.svg'
            alt='logo'
            width={40}
            height={40}
            />
            <button className='font-semibold text-sm'>Personal</button>
            <button className='font-semibold text-sm'>Products</button>
            <button className='font-semibold text-sm'>Get the app</button>
            
        </div>
        <div className='gap-2 flex flex-row items-center'>
            <button
              className='font-bold px-8 text-sm'
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              Log in
            </button>
            <button
            className='text-white text-sm font-bold px-6 py-3
             bg-blue-700 rounded rounded-full'
            >
            Get started
            </button>
        </div>
    </div>
  )
}

export default Navbar