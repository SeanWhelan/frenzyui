import React from 'react'
import styles from './container.module.css'

export const Container = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  )
}

export default Container
