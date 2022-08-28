import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Blob from '../components/Blob'

import { Button } from 'frenzyui'

export default function Home() {
  return (
    <div className='container'>
      <div className='center'>
        <Blob style={{ height: '200px' }} />
        <h1>FrenzyUI</h1>
        <p>The easiest way to build beautiful user interfaces.</p>
        <div className='h-stack'>
          <Link to='/components'>
            <Button
              variant='primary'
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Components
            </Button>
          </Link>
          <a href='https://github.com/SeanWhelan/frenzyui'>
            <Button
              variant='secondary'
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Check the repo
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
