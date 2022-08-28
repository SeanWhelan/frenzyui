import React from 'react'
import './components.css'
import { Button, Input, Container } from 'frenzyui'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Components() {
  const smallBtnPrimary = `<Button size='small' variant='<variant>'>Primary</Button>`
  const btn = `<Button variant='<variant>'>Primary</Button>`
  const btnLarge = `<Button size='large' variant='<variant>'>Primary</Button>`
  return (
    <Container>
      <h1>Buttons</h1>
      <Button size='small' variant='primary'>
        Primary
      </Button>
      <Button size='small'>Secondary</Button>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {smallBtnPrimary}
      </SyntaxHighlighter>
      <div style={{ height: '10px' }}></div>
      <Button variant='primary'>Primary</Button>
      <Button>Secondary</Button>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {btn}
      </SyntaxHighlighter>
      <div style={{ height: '10px' }}></div>
      <Button size='large' variant='primary'>
        Primary
      </Button>
      <Button size='large'>Secondary</Button>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {btnLarge}
      </SyntaxHighlighter>
      <h1>Inputs</h1>
      <Input type='text' placeholder="I'm a text input" mb='20px' />
      <Input type='password' placeholder="I'm a password input" mb='20px' />
      <Input type='number' placeholder="I'm a password input" mb='20px' />
      <Input type='text' placeholder="I'm a disabled input" disabled />
    </Container>
  )
}
