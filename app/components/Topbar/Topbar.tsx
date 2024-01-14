import React from 'react'
import './Topbar.css'
import { Link, useLocation } from '@remix-run/react'

const Topbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
        <ul>
            <Link to="/" className={`item ${pathname === '/' && 'isActive'}`}>
                Główna
            </Link>
            <Link to="/menu" className={`item ${pathname === '/menu' && 'isActive'}`}>
                Menu
            </Link>
            <Link to="/about" className={`item ${pathname === '/about' && 'isActive'}`}>
                O nas
            </Link>
            <Link to="/contact" className={`item ${pathname === '/contact' && 'isActive'}`}>
                Kontakt
            </Link>
        </ul>
    </div>
  )
}

export default Topbar