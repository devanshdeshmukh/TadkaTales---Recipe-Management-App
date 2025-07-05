import { useState } from 'react'
import './App.css'
import Mainroutes from './Routes/Mainroutes'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full overflow-x-hidden min-h-screen bg-amber-50 text-gray-800'>
      <div className='w-full py-4 px-4 sticky top-0 z-50 bg-amber-50/90 backdrop-blur-sm'>
        <Nav />
      </div>
      <div className='p-6 md:p-12 max-w-7xl mx-auto'>
        <Mainroutes />
      </div>
      <Footer/>
    </div>
  )
}

export default App


