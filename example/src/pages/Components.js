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
      <Button size='small' variant='primary' mr='5px'>
        Primary
      </Button>
      <Button size='small' mr='5px'>
        Secondary
      </Button>
      <Button size='small' variant='alternative'>
        Alternative
      </Button>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {smallBtnPrimary}
      </SyntaxHighlighter>
      <div style={{ height: '10px' }}></div>
      <Button variant='primary' mr='10px'>
        Primary
      </Button>
      <Button mr='10px'>Secondary</Button>
      <Button variant='alternative'>Alternative</Button>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {btn}
      </SyntaxHighlighter>
      <div style={{ height: '10px' }}></div>
      <Button size='large' variant='primary' mr='15px'>
        Primary
      </Button>
      <Button size='large' mr='15px'>
        Secondary
      </Button>
      <Button size='large' variant='alternative'>
        Secondary
      </Button>
      <SyntaxHighlighter language='jsx' style={dracula}>
        {btnLarge}
      </SyntaxHighlighter>
      <h1>Inputs</h1>
      <Input type='text' placeholder="I'm a text input" mb='10px' />
      <Input type='password' placeholder="I'm a password input" mb='10px' />
      <Input type='number' placeholder="I'm a number input" mb='10px' />
      <Input type='text' placeholder="I'm a disabled input" disabled />
      <h1>Containers</h1>
      <Container>
        <h4>I&apos;m in a container</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          consequuntur quidem voluptatum quas quos. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          consequuntur quidem voluptatum quas quos. Quisquam, quae.
        </p>
      </Container>
    </Container>
  )
}
