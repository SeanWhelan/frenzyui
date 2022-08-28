import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Components from './pages/Components'

import 'frenzyui/dist/index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/components' element={<Components />} />
      </Routes>
    </Router>
  )
}

export default App
