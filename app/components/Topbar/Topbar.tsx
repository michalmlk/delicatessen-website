import React from 'react'
import styles from './Topbar.css';
import { NavLink } from '@remix-run/react'

const Topbar: React.FC = () => {

  return (
    <div className="wrapper">
        <ul>
            <NavLink to="/" className="item">
                Główna
            </NavLink>
            <NavLink to="/menu" className="item">
                Menu
            </NavLink>
            <NavLink to="/about" className="item">
                O nas
            </NavLink>
            <NavLink to="/contact" className="item">
                Kontakt
            </NavLink>
        </ul>
    </div>
  )
}

export const links = () => [
    { rel: 'stylesheet', href: styles }
]

export default Topbar