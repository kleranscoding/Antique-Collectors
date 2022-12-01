import type { NextComponentType } from 'next'
import Link from 'next/link'
import { useState } from 'react'

import styles from '../styles/Header.module.css'
import { useToggleNavMenu } from '../hooks'

const Header: NextComponentType = () => {

  const { isMenuOpen, openMenu, closeMenu } = useToggleNavMenu()

  const navMenu = (
    <div className={styles.toggleNavMenu}>
      <span className={styles.closeBtn} onClick={closeMenu}>&times;</span>
      <Link className={styles.navItem} href='/' onClick={closeMenu}>
        Home
      </Link>
      <Link className={styles.navItem} href='/about' onClick={closeMenu}>
        About Us
      </Link>
      <Link className={styles.navItem} href='/subscribe' onClick={closeMenu}>
        Get Newsletter
      </Link>
    </div>
  )

  return (
    <header role='banner' className={styles.header}>
      <nav role='navigation'>
        <div className={styles.navHeader}>
          <Link className={styles.brand} href='/'> 
            Gray &amp; Co.
          </Link>
          <span className={styles.hamburger} onClick={openMenu}>&#9776;</span>
        </div>
        {isMenuOpen ? navMenu : null}
      </nav>
    </header>
  )
}

export { Header }