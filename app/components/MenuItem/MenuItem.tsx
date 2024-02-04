import React from 'react'
import { MenuItemProps } from '~/common/model'
import styles from './MenuItem.css';
import { Link } from '@remix-run/react';
import _ from 'lodash'

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, image, currency }) => {
  const idOfItem = _.camelCase(title);
  return (
    <div className="menu-item-wrapper">
      <div className="imageWrapper">
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <h3>{price} {currency}</h3>
        <p className="description">{description}</p>
        <Link prefetch='intent' to={`/menu/${idOfItem}`}>Check</Link>
      </div>
    </div>
  )
}

export const links = () => ([{
  rel: 'stylesheet', href: styles
}])

export default MenuItem