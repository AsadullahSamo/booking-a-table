import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='h-[100vh] w-[100%] bg-gray-400'>
        {/* <Login /> */}
        <Home />
      </main>

    </>
  )
}

export default App
