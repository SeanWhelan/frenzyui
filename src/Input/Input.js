import React from 'react'
import buttonstyles from '../Button/button.module.css'
import styles from './input.module.css'
// import styles from './input.module.css'

export const Input = ({
  type,
  variant = 'secondary',
  size,
  backgroundColor,
  ...props
}) => {
  if (type === 'button') {
    return (
      <input
        type='button'
        className={[
          buttonstyles.button,
          buttonstyles[variant],
          buttonstyles[size]
        ].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      />
    )
  } else {
    return (
      <input
        type={type}
        className={[styles.input, styles[size]].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      />
    )
  }
}

export default Input
