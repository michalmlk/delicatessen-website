import React from 'react'
import { MenuItemProps } from '~/common/model'
import styles from './MenuItem.css';

const MenuItem: React.FC<MenuItemProps> = ({title, description, price, imageUrl}) => {
  return (
    <div className="menu-item-wrapper">
      <img src={imageUrl} alt={title} />
      <div className="details">
        <h2>{title}</h2>
        <h3>{price} zł</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export const links = () => ([{
  rel: 'stylesheet', href: styles
}])

export default MenuItem