import React from 'react'

import { ExampleComponent } from 'seanwui'
import { Button } from 'seanwui'
import 'seanwui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button size='small'>Click me!</Button>
    </>
  )
}

export default App
