import React from 'react'
import styles from './Topbar.css';
import { NavLink } from '@remix-run/react'
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

const Topbar: React.FC = () => {

    // TODO create mobile version + optimise prefetching
      return (
        <Navbar>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <NavLink to="/" className="item" prefetch="intent">
                     Główna
                </NavLink>
            </NavbarItem>
            <NavbarItem>
            <NavLink to="/menu" className="item" prefetch="intent">
                Menu
            </NavLink>
            </NavbarItem>
            <NavbarItem>
            <NavLink to="/about" className="item" prefetch="intent">
                O nas
            </NavLink>
            </NavbarItem>
            <NavbarItem>
            <NavLink to="/contact" className="item" prefetch="intent">
                Kontakt
            </NavLink>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
  )
}

export const links = () => [
    { rel: 'stylesheet', href: styles }
]

export default Topbar