import React from 'react'


const Home = () => {
  return (
    <div>
        <div className='relative w-screen h-screen'>
            <div className='absolute top-0 left-0 w-full h-full bg-black/50'/>
            <img src='/img/pexels-gustavo-fring-4173116.jpg' alt="Shopping" className='object-cover object-center w-full h-full'></img>
            <div className='absolute w-full top-1/2'>
                <div className='p-4 mx-auto text-center lg:w-2/4 rounded-3xl md:rounded-full bg-black/20 backdrop-blur-sm'>
                <h1 className='text-white mx-auto text-[25pt] lg:text-5xl font-cinzel font-bold tracking-wider'>Tescommerce</h1>
                <h1 className='text-slate-100 mx-auto text-[14pt] font-mons font-light'> Provides the Products You Need</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home