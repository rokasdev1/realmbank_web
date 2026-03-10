import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full mt-16">
        <div className="flex flex-col justify-center items-center px-8">
          <span className="text-amber-700 font-semibold tracking-wide">CAFFEINE TOFFEE CANDY</span>
          <h1 className="text-5xl font-bold text-center mx-16 leading-normal mt-2">
            Meet Caffy Taffy
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl">
            Caffy Taffy blends rich coffee flavor with buttery toffee chew for the perfect pick-me-up treat.
            Crafted for candy lovers who like their sweetness with a buzz.
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <button className="text-white font-bold px-6 py-3 bg-amber-700 rounded-xl">
              Shop Caffy Taffy
            </button>
            <button className="text-amber-800 font-bold px-6 py-3 bg-transparent border-2 border-amber-700 rounded-xl">
              Explore flavors
            </button>
          </div>
          <div className="w-full max-w-4xl mt-12 rounded-3xl bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100 p-10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h2 className="text-2xl font-extrabold text-amber-900">Bold Coffee</h2>
                <p className="text-gray-700 mt-2">Made with smooth roasted coffee notes.</p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-amber-900">Buttery Toffee</h2>
                <p className="text-gray-700 mt-2">Classic toffee texture in every bite.</p>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-amber-900">Anytime Energy</h2>
                <p className="text-gray-700 mt-2">A candy crafted to keep your day sweet and lively.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage
