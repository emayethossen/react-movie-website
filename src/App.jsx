import React, { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchTime, setWatchTime] = useState('')
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'))
    if (previousWatchTime) {
      const sum = previousWatchTime + time
      localStorage.setItem('watchTime', sum)
      setWatchTime(sum)
    } else {
      localStorage.setItem('watchTime', time)
      setWatchTime(time)
    }
  }

  return (
    <div className='container'>
      <div className="header  m-auto my-3 ">
        <Header />
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleWatchTime={handleWatchTime} />
        </div>
        <div className="sidecart col-md-4 card mt-5 h-auto">
          <SideCart watchTime={watchTime} />
        </div>
      </div>
      <Contact />
      <ToastContainer />
    </div>
  )
}

export default App
