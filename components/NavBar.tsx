import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=' w-full flex justify-between py-5 px-5'>
        <div className='gap-8 flex flex-row items-center'>
            <Image
            src='/realmlogo.svg'
            alt='logo'
            width={50}
            height={50}
            />
            <button className='font-bold'>Personal</button>
            <button className='font-bold'>Products</button>
            <button className='font-bold'>Get the app</button>
            
        </div>
        <div className='gap-2 flex flex-row items-center'>
            <button className='font-bold px-8'>
            Log in
            </button>
            <button
            className='text-white font-bold px-6 py-3
             bg-blue-700 rounded rounded-full'
            >
            Get started
            </button>
        </div>
    </div>
  )
}

export default Navbar