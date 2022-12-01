
import Link from 'next/link'

import styles from '../styles/NavModal.module.css'

import { useToggleNavMenu } from '../hooks'

// nav menu modal popup
const NavMenuModal = () => {

  const { isMenuOpen, closeMenu } = useToggleNavMenu()

  if (!isMenuOpen) return null

  return (
    <div className='modal-navbar'>
      <div className={styles.toggleNavMenu}>
        <div className={styles.closeBtnContainer}>
          <span className={styles.closeBtn} onClick={closeMenu}>&times;</span>
        </div>
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
    </div>
  )
}

export { NavMenuModal }