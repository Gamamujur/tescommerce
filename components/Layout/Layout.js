import React from 'react'
import Navbar from './Navbar'


const Layout = (props) => {
  return (
    <div className='overflow-x-hidden h-full'>
        <Navbar/>
        <main className='w-full h-full'>{props.children}</main>
    </div>
  )
}

export default Layout