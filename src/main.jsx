import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import Reservation from './components/Reservation.tsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/' element={<Signup />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)