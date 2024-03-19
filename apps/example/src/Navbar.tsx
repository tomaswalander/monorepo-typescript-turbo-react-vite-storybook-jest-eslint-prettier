import { FC } from 'react'

import * as navbar from './Navbar.module.css'
import { useAuth0 } from '@auth0/auth0-react'

export const Navbar: FC = () => {
  const { user } = useAuth0()
  return (
    <nav className={navbar.navbarContainer}>
      <div className={navbar.inner}>
        <ul className={navbar.mainMenu}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={navbar.userMenu}>
          <p>{user?.email}</p>
        </div>
      </div>
    </nav>
  )
}
