import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './stores/pages/HomePage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import TvPage from './stores/pages/TvPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path='/mobiles' element={<MobilePage/>} />
        <Route path='/computers' element={<ComputerPage/>} />
        <Route path='/Tvs' element={<TvPage/>} />
      </Routes>
    </div>
  )
}

export default App;