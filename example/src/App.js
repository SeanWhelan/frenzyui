import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import { Button, Input } from 'frenzyui'
import 'frenzyui/dist/index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route
          exact
          path='/components'
          element={
            <>
              <Button size='small'>Click me!</Button>
              <Input type='text' value='Hellos' />
              ss
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
