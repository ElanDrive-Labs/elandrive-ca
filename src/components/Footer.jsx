import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        © {new Date().getFullYear()} ElanDrive Labs. All rights reserved.
      </span>
      <nav className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Solutions</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </footer>
  )
}
