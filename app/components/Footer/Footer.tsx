import React from 'react';
import styles from './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@nextui-org/react';

const Footer: React.FC = () => {
    return (
        <div className="footer-wrapper">
            <p>{new Date().getFullYear()} Quchnia Bednarek</p>
            <div className="links">
                <ul>
                    <Link
                        isExternal
                        isBlock
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                        anchorIcon={<FontAwesomeIcon icon={faFacebook} />}
                    >
                        {'Facebook '}
                    </Link>
                    <Link
                        isExternal
                        isBlock
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                        anchorIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
                    >
                        {'Maps '}
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export const links = () => [{ rel: 'stylesheet', href: styles }];

export default Footer;
