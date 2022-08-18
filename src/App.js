import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './home'
import Singlecountry from './singlecountry'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='country/:name' element={<Singlecountry />} />
    </Routes>
  )
}

export default App
