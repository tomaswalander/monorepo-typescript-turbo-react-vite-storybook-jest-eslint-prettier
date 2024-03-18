import { FC } from 'react'

import * as navbar from './Navbar.module.css'

export const Navbar: FC = () => {
  return (
    <nav className={navbar.navbarContainer}>
      <div className={navbar.inner}>
        <ul className={navbar.mainMenu}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={navbar.userMenu}>
          <p>Tomas Walander</p>
        </div>
      </div>
    </nav>
  )
}
