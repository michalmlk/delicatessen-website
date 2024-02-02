import React from 'react';
import styles from './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className='footer-wrapper'>
        <p>{new Date().getFullYear()} Quchnia Bednarek</p>
        <div className="links">
            <ul>
                <li className="link">
                    <a href="/" target='_blank'>Facebook <FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li className="link">
                    <a href="/" target='_blank'>Maps <FontAwesomeIcon icon={faMapLocationDot} /></a>
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