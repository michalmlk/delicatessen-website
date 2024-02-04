import React from 'react'
import styles from './ContactInfo.css';

export type ContactInfoProps = {
    contact: {
        title: string;
        subtitle: string;
        description: string;
        phoneNumber1: string;
        phoneNumber2? : string | undefined
    }
}

const ContactInfo: React.FC<ContactInfoProps> = ({contact}) => {

    const {subtitle, description, phoneNumber1, phoneNumber2 } = contact;

  return (
    <div className='contact-info'>
        <section>
            <h2>
                {subtitle}
            </h2>
            <p>
                {description}
            </p>

        </section>
        <section>
            <h2>Feel free also to contact us by phone!</h2>
            <div className="phones">
                <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
                {phoneNumber2 && <a href={`tel:${phoneNumber2}`}>{phoneNumber2}</a>}
            </div>
        </section>
    </div>
  )
}

export const links = () => ([
    { rel: 'stylesheet', href: styles }
])

export default ContactInfo