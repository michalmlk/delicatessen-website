import { MetaFunction } from '@remix-run/node';
import React from 'react'
import MenuItems, {links as menuItemsLinks } from '~/components/MenuItems/MenuItems';
import { load } from '~/lib/datocms';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [
      { title: "Menu - Quchnia Bednarek" },
    ];
  };



const MENUITEMS_QUERY = `{
  allMenuitems {
    id
    title
    image {
      url
    }
    price
    currency
    description
  }
  _allMenuitemsMeta {
    count
  }
}`;

export const loader = () => {
  return load({
    query: MENUITEMS_QUERY,
    variables: {},
    excludeInvalid: false,
    includeDrafts: true
  })
}

const MenuPage: React.FC = () => {
  const { allMenuitems } = useLoaderData<typeof loader>();

  return (
    <div className="pageContentWrapper">
      <h1 className='heading'>Menu</h1>
      <MenuItems items={allMenuitems} />
    </div>
  )
}

export const links = () => [...menuItemsLinks()]

export default MenuPage