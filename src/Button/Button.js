import React from 'react'
import styles from './button.module.css'

export const Button = ({
  size,
  backgroundColor,
  children,
  variant = 'secondary',
  type = 'button',
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

  return (
    <button
      type={type}
      className={[styles.button, styles[variant], styles[size]].join(' ')}
      style={{ ...propStyles }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
