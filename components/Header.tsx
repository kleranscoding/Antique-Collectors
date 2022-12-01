import type { NextComponentType } from 'next'
import Link from 'next/link'

import styles from '../styles/Header.module.css'
import { useToggleNavMenu } from '../hooks'

const Header: NextComponentType = () => {

  const { openMenu } = useToggleNavMenu()

  return (
    <header role='banner' className={styles.header}>
      <nav role='navigation'>
        <div className={styles.navHeader}>
          <Link className={styles.brand} href='/'> 
            Gray &amp; Co.
          </Link>
          <span className={styles.hamburger} onClick={openMenu}>&#9776;</span>
        </div>
      </nav>
    </header>
  )
}

export { Header }