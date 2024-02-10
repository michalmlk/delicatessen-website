import React from 'react';
import { MenuItemProps } from '~/common/model';
import MenuItem, { links as menuItemLinks } from '~/components/MenuItem/MenuItem';
import styles from './MenuItems.css'

type MenuItemsProps = {
    items: MenuItemProps[]
}
  
const MenuItems: React.FC<MenuItemsProps> = ({items}) => {
    return (
        <div className='menu-items'>
            {items.length ? items.map((item) => <MenuItem key={item.id} {...item} />) : <h1>No items</h1>}
        </div>
    )
}

export const links = () => ([
    { rel: 'stylesheet', href: styles},
    ...menuItemLinks()
])

export default MenuItems;