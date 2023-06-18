import React from 'react'

const Contact = () => {
  return (
    <div className="w-screen h-fit" id='contacts'>
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-rows-2 lg:p-20">
        <div className="relative w-full">
          <img
            src="../img/icons8-team-CePzL5MMNpE-unsplash.jpg"
            alt="Image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-50 bg-gradient-to-r from-slate-600 to-black hover:opacity-70"></div>
          <div className="absolute bottom-4 left-4">
            <h1 className="p-1 text-2xl font-bold text-white font-rale">
              Surprise your loved one with a special gift
            </h1>
          </div>
        </div>

        <div className="w-full p-10 flex items-center justify-center bg-slate-100 lg:rounded-tr-[200px]">
          <h1 className="text-2xl font-semibold text-center text-slate-700 font-cinzel">
            Surprise your loved one with a special gift from our extensive
            collection of hand-picked products.
          </h1>
        </div>

        <div className="relative w-full">
          <img
            src="../img/artem-beliaikin-kTd2PvtqE_o-unsplash.jpg"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 transition-opacity duration-300 opacity-50 bg-gradient-to-r from-slate-600 to-black hover:opacity-70"></div>
          <div className="absolute bottom-4 left-4">
            <h1 className="p-1 text-2xl font-bold text-white font-rale">
              Don't miss out on our monthly discount
            </h1>
          </div>
        </div>

        <div className="w-full p-10 flex items-center justify-center md:col-start-1 md:row-start-2 bg-slate-100 lg:rounded-bl-[200px]">
          <h1 className="text-2xl font-semibold text-center text-slate-700 font-cinzel">
            Don't miss out on our monthly discount and get your favorite
            products at a fraction of their original price.
          </h1>
        </div>
      </div>

      <footer className="py-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full mb-4 md:w-auto md:mb-0">
            <h2 className="text-2xl font-bold">Tescommerce <small className='text-xs'>by Gama</small></h2>
            <p className="text-sm">Your ultimate online shopping destination</p>
          </div>
          <div className="w-full md:w-auto">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white md:text-base">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white md:text-base">Contact</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white md:text-base">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white md:text-base">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tescommerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact