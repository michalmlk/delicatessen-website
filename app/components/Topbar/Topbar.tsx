import React, { useState, useRef } from 'react';
import styles from './Topbar.css';
import { NavLink, useLocation, useNavigate } from '@remix-run/react';
import {
    Link,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const Topbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        {
            label: 'Główna',
            href: '/',
        },
        { label: 'Menu', href: '/menu' },
        { label: 'O nas', href: '/about' },
        { label: 'Kontakt', href: '/contact' },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                className="sm:hidden"
            />
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <NavLink to="/" className="item" prefetch="intent">
                        Home
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to="/menu" className="item" prefetch="intent">
                        Menu
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to="/about" className="item" prefetch="intent">
                        About
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to="/contact" className="item" prefetch="intent">
                        Contact
                    </NavLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="icons">
                <Link
                    isExternal
                    isBlock
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                    anchorIcon={<FontAwesomeIcon icon={faFacebook} />}
                    style={{ color: 'red' }}
                ></Link>
                <Link
                    isExternal
                    isBlock
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                    anchorIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
                    style={{ color: 'red' }}
                ></Link>
            </NavbarContent>
            <NavbarMenu className="bg-transparent text-white">
                {menuItems.map((item) => (
                    <NavbarMenuItem key={`${item.href}`}>
                        <NavLink className={`w-full item mobile`} to={item.href}>
                            {item.label}
                        </NavLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export const links = () => [{ rel: 'stylesheet', href: styles }];

export default Topbar;
