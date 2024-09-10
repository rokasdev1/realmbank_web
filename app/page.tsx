import { NavBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar/>


      <div className="w-full mt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center mx-16 leading-normal">
            The best way to store, send and receive your money</h1>
            <p className="mt-1 text-center text-gray-500">
            All you need to control your finances - in one platform</p>
            <div className="flex flex-row gap-4 mt-8">
              <button
              className='text-white font-bold px-6 py-3
              bg-blue-700  rounded-xl'
              >
              Get started
              </button>
              <button
              className='text-black font-bold px-6 py-3
              bg-white border-2 border-gray-500 rounded-xl' 
              >
              Get the app
              </button>
            </div>
        </div>
    </div>
    </main>
  );
}
