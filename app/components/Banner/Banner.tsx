import React from 'react'
import styles from './Banner.css'

const Banner: React.FC = () => {
  return (
    <div className='banner'>
        <div className="text-content">
        </div>
    </div>
  )
}

export const links = () => [{
  rel: 'stylesheet',
  href: styles
}]

export default Banner