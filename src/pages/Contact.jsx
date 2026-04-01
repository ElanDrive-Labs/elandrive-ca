import React, { useState } from 'react'
import styles from './Contact.module.css'

// ── Replace with your Formspree form ID ──────────────────────────────────────
// 1. Go to https://formspree.io → sign up free → New Form
// 2. Copy the ID from your form URL (e.g. https://formspree.io/f/abcdef12)
// 3. Paste it below
const FORMSPREE_ID = 'xaqlodbg'
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: '📍', label: 'Location',  value: 'Canada' },
  { icon: '🌐', label: 'Website',   value: 'www.elandrive.ca', href: 'https://www.elandrive.ca' },
  { icon: '✉️', label: 'Email',     value: 'labs@elandrive.ca', href: 'mailto:labs@elandrive.ca' },
  // { icon: '💼', label: 'LinkedIn',  value: 'ElanDrive Labs', href: '#' },
]

export default function Contact() {
  const [fields, setFields] = useState({
    firstName: '', lastName: '', email: '', company: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!fields.firstName || !fields.email || !fields.message) {
      setStatus('validation')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-inner" style={{ paddingTop: '6rem' }}>
      <header className="page-header fade-up">
        <span className="page-tag">// 03 — Get in Touch</span>
        <h1 className="page-title">Contact Us</h1>
        <div className="title-line" />
      </header>

      <div className={`${styles.grid} fade-up fade-up-1`}>

        {/* ── Left: info ── */}
        <div className={styles.infoCol}>
          <p className={styles.intro}>
            Exploring an idea or building something ambitious?
            Let’s talk. We reply within 24 hours.
          </p>

          {contactInfo.map(({ icon, label, value, href }) => (
            <div key={label} className={styles.infoItem}>
              <span className={styles.infoIcon}>{icon}</span>
              <div>
                <div className={styles.infoLabel}>{label}</div>
                <div className={styles.infoValue}>
                  {href ? <a href={href}>{value}</a> : value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: form ── */}
        <div>
          {status === 'success' ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <p>Message received.</p>
              <p>We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label className={styles.label}>First Name <span className={styles.req}>*</span></label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Jane"
                    value={fields.firstName}
                    onChange={set('firstName')}
                  />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Last Name</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Doe"
                    value={fields.lastName}
                    onChange={set('lastName')}
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label className={styles.label}>Email Address <span className={styles.req}>*</span></label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="jane@company.com"
                  value={fields.email}
                  onChange={set('email')}
                />
              </div>

              <div className={styles.group}>
                <label className={styles.label}>Company <span className={styles.opt}>(optional)</span></label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Acme Corp"
                  value={fields.company}
                  onChange={set('company')}
                />
              </div>

              <div className={styles.group}>
                <label className={styles.label}>How can we help? <span className={styles.req}>*</span></label>
                <textarea
                  className={styles.textarea}
                  placeholder="Tell us about your project or question..."
                  value={fields.message}
                  onChange={set('message')}
                />
              </div>

              {status === 'validation' && (
                <p className={styles.errorMsg}>
                  ✗ Please fill in First Name, Email, and Message.
                </p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>
                  ✗ Something went wrong. Please email us directly at{' '}
                  <a href="mailto:labs@elandrive.ca">labs@elandrive.ca</a>
                </p>
              )}

              <button
                className={styles.submit}
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
