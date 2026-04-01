import React from 'react'
import styles from './About.module.css'

/* const team = [
  { initials: 'AK', name: 'Alex Kovacs',    role: 'Founder & CEO' },
  { initials: 'ML', name: 'Mia Leblanc',    role: 'Head of AI Research' },
  { initials: 'SR', name: 'Sam Rousseau',   role: 'Lead Engineer' },
  { initials: 'JT', name: 'Jade Tremblay',  role: 'Product & Design' },
] */

const values = [
  'Precision over velocity — we engineer for robustness, not shortcuts',
  'Clarity in every decision — from system architecture to delivery',
  'Continuous evolution — learning is built into every system we create',
  'Security by design — not as a feature, but as a foundation',
  'Long-term thinking — we build partnerships, not transactions,'
]

export default function About() {
  return (
    <div className="page-inner" style={{ paddingTop: '6rem' }}>
      <header className={`page-header fade-up`}>
        <span className="page-tag">// 01 — Who We Are</span>
        <h1 className="page-title">About<br />ElanDrive Labs</h1>
        <div className="title-line" />
      </header>

      <div className={`${styles.grid} fade-up fade-up-1`}>
        {/* Text column */}
        <div>
          <p className={styles.body}>            
            ElanDrive Labs is an <strong>innovation studio</strong> building intelligent systems at the 
            intersection of software, automation, and real-world technology.
          </p>
          <p className={styles.body}>
            We design and develop solutions that go beyond prototypes — engineered 
            to operate, scale, and deliver in <strong>production environments.</strong>            
          </p>
          <p className={styles.body}>
            Founded on the belief that intelligence should move — adapt, evolve, and 
            integrate seamlessly — we create systems that grow with the businesses they serve. 
            From <strong>architecture to deployment</strong>, our focus remains on clarity, 
            reliability, and long-term performance.          
          </p>
          <p className={styles.body}>
            Our work spans applied AI, embedded and connected systems, data engineering,  
            and product design — brought together to deliver cohesive, 
            <strong> end-to-end solutions</strong>.
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            <span className="page-tag">// Core Values</span>
            <ul className={styles.values}>
              {values.map(v => <li key={v}>{v}</li>)}
            </ul>
          </div>
        </div>

        {/* Visual column */}
        <div className={styles.visual}>
          <div className={`card ${styles.pyramidCard}`}>
            <svg viewBox="0 0 240 200" width="170" style={{ margin: '0 auto', display: 'block' }}>
              <polygon points="120,20 220,180 20,180" fill="none" stroke="#3fffd2" strokeWidth="1.5" opacity="0.6"/>
              <line x1="120" y1="20" x2="70"  y2="180" stroke="#3fffd2" strokeWidth="0.5" opacity="0.3"/>
              <line x1="120" y1="20" x2="95"  y2="180" stroke="#3fffd2" strokeWidth="0.5" opacity="0.3"/>
              <line x1="120" y1="20" x2="145" y2="180" stroke="#3fffd2" strokeWidth="0.5" opacity="0.3"/>
              <line x1="120" y1="20" x2="170" y2="180" stroke="#3fffd2" strokeWidth="0.5" opacity="0.3"/>
              <line x1="120" y1="20" x2="45"  y2="180" stroke="#c8ff8c" strokeWidth="0.5" opacity="0.2"/>
              <line x1="120" y1="20" x2="195" y2="180" stroke="#c8ff8c" strokeWidth="0.5" opacity="0.2"/>
              <line x1="45"  y1="120" x2="195" y2="120" stroke="#3fffd2" strokeWidth="0.5" opacity="0.25"/>
              <line x1="62"  y1="150" x2="178" y2="150" stroke="#3fffd2" strokeWidth="0.5" opacity="0.25"/>
              <line x1="82"  y1="75"  x2="158" y2="75"  stroke="#c8ff8c" strokeWidth="0.5" opacity="0.25"/>
              <circle cx="120" cy="20"  r="3" fill="#3fffd2" opacity="0.9"/>
              <circle cx="20"  cy="180" r="2" fill="#3fffd2" opacity="0.5"/>
              <circle cx="220" cy="180" r="2" fill="#3fffd2" opacity="0.5"/>
            </svg>
            <p className={styles.pyramidLabel}>Structure · Precision · Clarity</p>
          </div>

          <div className={`card ${styles.statsCard}`}>
            <span className="page-tag" style={{ marginBottom: '.5rem' }}>// By the numbers</span>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>2025</div>
                <div className={styles.statLabel}>Founded</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>CA</div>
                <div className={styles.statLabel}>Based in Canada</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
     {/*  <div className={`fade-up fade-up-2`} style={{ marginTop: '4rem' }}>
        <span className="page-tag">// The Team</span>
        <div className={styles.teamGrid}>
          {team.map(m => (
            <div key={m.name} className={`card ${styles.teamCard}`}>
              <div className={styles.avatar}>{m.initials}</div>
              <div className={styles.memberName}>{m.name}</div>
              <div className={styles.memberRole}>{m.role}</div>
            </div>
          ))}
        </div>
        <p className={styles.teamNote}>* Replace with your actual team information.</p>
      </div> */}
    </div>
  )
}
