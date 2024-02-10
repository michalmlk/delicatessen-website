import React from 'react';
import styles from './Topbar.css';
import { NavLink } from '@remix-run/react';
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';

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
            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem key={`${item.href}`}>
                        <NavLink className={`w-full`} to={item.href}>
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
