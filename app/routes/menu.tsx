import { MetaFunction } from '@remix-run/node';
import React from 'react'
import { MenuItemProps } from '~/common/model';
import MenuItems, {links as menuItemsLinks } from '~/components/MenuItems/MenuItems';

export const meta: MetaFunction = () => {
    return [
      { title: "Quchnia Bednarek" },
    ];
  };

const items: MenuItemProps[] = [{
    id: 1,
    title: 'Test item',
    description: 'Blablabla',
    imageUrl: '',
    price: 25.99
},{
  id: 2,
  title: 'Test item',
  description: 'Blablabla',
  imageUrl: '',
  price: 25.99
},{
  id: 3,
  title: 'Test item',
  description: 'Blablabla',
  imageUrl: '',
  price: 25.99
},{
  id: 4,
  title: 'Test item',
  description: 'Blablabla',
  imageUrl: '',
  price: 25.99
},{
  id: 5,
  title: 'Test item',
  description: 'Blablabla',
  imageUrl: '',
  price: 25.99
}]

const MenuPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-[120px]">
      <h1>Menu</h1>
      <MenuItems items={items} />
    </div>
  )
}

export const links = () => [...menuItemsLinks()]

export default MenuPage