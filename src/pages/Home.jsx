import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const stats = [
  { num: '2025', label: 'Founded' },
  { num: '3', label: 'Core Innovations' },
  { num: '1', label: 'Flagship Platform' },
  { num: '4', label: 'Patents Filled' },
]

export default function Home() {
  return (
    <section className={styles.hero}>
      {/* Ambient glow */}
      <div className={styles.glow} />

      {/* Corner decorations */}
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      {/* Logo */}
      <div className={`${styles.logoWrap} fade-up`}>
        <div className={styles.scanLine} />
        <img src="/logo2.png" alt="ElanDrive Labs" className={styles.logo} />
      </div>

      <h1 className={`${styles.title} fade-up fade-up-1`}>ElanDrive Labs</h1>
      <p className={`${styles.sub} fade-up fade-up-2`}>Intelligence in Motion</p>
      <p className={`${styles.desc} fade-up fade-up-2`}>
        We design intelligent systems that drive innovation forward — combining advanced software, 
        automation, and data-driven engineering to transform complexity into seamless, high-performance solutions.
      </p>

      <div className={`${styles.btnGroup} fade-up fade-up-3`}>
        <Link to="/services" className="btn-primary">Explore Solutions</Link>
        <Link to="/contact"  className="btn-outline">Get in Touch</Link>
      </div>

      {/* Stats */}
      <div className={`${styles.statsRow} fade-up fade-up-4`}>
        {stats.map(s => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
