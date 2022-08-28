import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
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
              <h1>Buttons</h1>
              <Button size='small' variant='primary'>
                Click me!
              </Button>
              <Button size='small'>Click me!</Button>
              <br />
              <div style={{ height: '10px' }}></div>
              <Button variant='primary'>Click me!</Button>
              <Button>Click me!</Button>
              <br />
              <div style={{ height: '10px' }}></div>
              <Button size='large' variant='primary'>
                Click me!
              </Button>
              <Button size='large'>Click me!</Button>
              <br />
              <h1>Input</h1>
              <Input type='text' value='Hellos' />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
