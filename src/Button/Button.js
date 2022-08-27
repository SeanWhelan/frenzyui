import React from 'react'
import styles from './button.module.css'

export const Button = ({
  size,
  backgroundColor,
  children,
  variant = 'secondary',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={[styles.button, styles[variant], styles[size]].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
