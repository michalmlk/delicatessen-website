import React from 'react';
import styles from './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className='footer-wrapper'>
        <p>{new Date().getFullYear()} Quchnia Bednarek</p>
        <div className="links">
            <ul>
                <li>
                    <a href="/">Facebook</a>
                </li>
                <li>
                    <a href="/">Maps</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export const links = () => [
    {rel: 'stylesheet', href: styles}
]

export default Footer