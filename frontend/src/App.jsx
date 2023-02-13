import { useState } from 'react'
import ParticlesBg from 'particles-bg'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Team from './components/Team'
import Projects from './components/Projects'
import { BackToTop } from './components/ScrollToTop'
import NewProject from './components/NewProject'

function App() {

  return (
    <>
      <div className='app'>
        <ParticlesBg color='#f4f4f4' num={200} type="cobweb" bg={true} />
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/create' element={<NewProject/>}/>
          </Routes>
        </div>
      </div>
      <BackToTop/>
    </>
  )
}

export default App
