import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <NavLink to="/" className={styles.logo}>
        <img src="/logo2.png" alt="ElanDrive Labs" />
        <div>
          <span className={styles.logoName}>ElanDrive Labs</span>
          <span className={styles.logoSub}>Intelligence in Motion</span>
        </div>
      </NavLink>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><NavLink to="/"        className={({ isActive }) => isActive ? styles.active : ''} end>Home</NavLink></li>
        <li><NavLink to="/about"   className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
        <li><NavLink to="/services"className={({ isActive }) => isActive ? styles.active : ''}>Solutions</NavLink></li>
        <li><NavLink to="/contact" className={styles.cta}>Contact</NavLink></li>
      </ul>

      <button
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
