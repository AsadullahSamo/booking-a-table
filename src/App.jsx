import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Reservation from './components/Reservation'

function App() {

  return (
    <>
      <main className='h-[100vh] w-[100%] bg-gray-400'>
        {/* <Login /> */}
        <Home />
        {/* <Reservation /> */}
      </main>

    </>
  )
}

export default App
