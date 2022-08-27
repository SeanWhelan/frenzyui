import React from 'react'
import { Input } from '..'
import styles from './input.module.css'

export const Button = ({ type, ...props }) => {
  return <input type={type} />
}

export default Button
