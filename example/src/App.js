import React from 'react'

import { ExampleComponent } from 'swui'
import { Button } from 'swui'
import 'swui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button size='small'>Click me!</Button>
    </>
  )
}

export default App
