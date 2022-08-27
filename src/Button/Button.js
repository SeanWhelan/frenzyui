import React from 'react'
import styles from './button.module.css'

export const Button = ({
  size,
  backgroundColor,
  children,
  variant = 'secondary',
  ...props
}) => {
  console.log(styles.primary)
  return (
    <button
      type='button'
      className={[styles.button, styles[variant], styles[size]].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
