import React from 'react'
import buttonstyles from '../Button/button.module.css'
import styles from './input.module.css'
// import styles from './input.module.css'

export const Input = ({
  type,
  variant = 'secondary',
  size,
  backgroundColor,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  ...props
}) => {
  const propStyles = {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
    backgroundColor
  }

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
        style={{ ...propStyles }}
        {...props}
      />
    )
  }
}

export default Input
