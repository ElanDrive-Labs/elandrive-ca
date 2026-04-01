import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const services = [
  {
    icon: '🚗',
    title: 'Automotive HMI & Digital Clusters',
    desc: 'Design and development of next-generation digital instrument clusters and in-vehicle interfaces. From concept to real-time rendering, we build systems that combine performance, clarity, and emotional design.',
    tag: 'Qt · Embedded · Real-time UI',
  },
  {
    icon: '⚙️',
    title: 'Embedded & Real-Time Engineering',
    desc: 'Low-level and performance-critical software for systems that operate in real-time. Optimized for reliability, efficiency, and hardware integration.',
    tag: 'C++ · RTOS · Systems',
  },
  {
    icon: '📱',
    title: 'Mobile & Connected Apps',
    desc: 'Development of mobile and connected applications that extend product ecosystems. Seamless interaction between user, device, and intelligent backend systems.',
    tag: 'iOS · Android · APIs',
  },
  {
    icon: '🛰️',
    title: 'Autonomous & Drone Systems (R&D)',
    desc: 'Exploration and prototyping of autonomous systems, including drone-based platforms. Focused on control, perception, and intelligent behavior in dynamic environments.',
    tag: 'Control · Sensors · Autonomy',
  },
  {
    icon: '🔬',
    title: 'Innovation & Prototyping',
    desc: 'From idea to working prototype — we design, build, and iterate on advanced concepts, turning complex ideas into tangible, testable systems.',
    tag: 'R&D · Prototypes · Concepts',
  },
   {
    icon: '🧠',
    title: 'Intelligent Systems & AI',
    desc: 'Custom AI systems designed for real-world applications — from perception and decision logic to adaptive user experiences. Built to integrate, not just demonstrate.',
    tag: 'AI · Vision · Smart Logic',
  },
]

export default function Services() {
  return (
    <div className="page-inner" style={{ paddingTop: '6rem' }}>
      <header className="page-header fade-up">
        <span className="page-tag">// 02 — What We Build</span>
        <h1 className="page-title">Our Solutions</h1>
        <div className="title-line" />
      </header>

      <div className={`${styles.grid} fade-up fade-up-1`}>
        {services.map(s => (
          <div key={s.title} className={`card ${styles.card}`}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
            <span className={styles.tag}>{s.tag}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.cta} fade-up fade-up-2`}>
        <p>Ready to explore what intelligent systems can do for you?</p>
        <Link to="/contact" className="btn-primary">Start a Conversation</Link>
      </div>
    </div>
  )
}
