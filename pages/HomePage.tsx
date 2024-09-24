import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full mt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center mx-16 leading-normal">
            The best way to store, send and receive your money</h1>
            <p className="mt-1 text-center text-gray-500">
            All you need to control your finances - in one platform</p>
            <div className="flex flex-row gap-4  mt-8 ">
              <button
              className='text-white font-bold px-6 py-3
              bg-blue-700  rounded-xl'
              >
              Get started
              </button>
              <button
              className='text-black font-bold px-6 py-3
              bg-transparent border-2 border-gray-500 rounded-xl' 
              >
              Get the app
              </button>
            </div>
            <div className="flex flex-row justify-center items-start mt-4">
              <h1
              className="text-3xl font-extrabold leading-loose mr-8 mt-36 tracking-wide"
              >Fastest transactions,<br/>Secure contacts,<br/>And more.</h1>
              <img className="w-1/4 pt-6 drop-shadow-strong-b"
              src="phone.png"
              alt="phone"
              />
              <h1
              className="text-3xl font-extrabold ml-8 mt-36 tracking-wide"
              >All in a single app.&nbsp;&nbsp;</h1>
            </div>
        </div>
    </div>
  )
}

export default HomePage