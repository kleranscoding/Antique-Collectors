import type { NextComponentType } from 'next'
import Link from 'next/link'

import styles from '../styles/Footer.module.css'

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerText}>
        <Link href="/about#contact">Contact Us</Link>
        <p>&copy; 2019 - 2023 Gray &amp; Co.</p>
      </div>
    </footer>
  )
}

export { Footer }