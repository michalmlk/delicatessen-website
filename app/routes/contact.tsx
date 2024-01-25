import React from 'react'
import { MetaFunction } from '@remix-run/node';
import ContactInfo, { links as contactInfoLinks } from '~/components/ContactInfo/ContactInfo'

export const meta: MetaFunction = () => ([
    {title: 'Quchnia Bednarek - kontakt'}
])

const ContactPage: React.FC = () => {
  return (
    <div className="pageContentWrapper">
        <h1 className='heading'>Kontakt</h1>
        <ContactInfo />
  </div>
  )
}

export const links = () => ([
    ...contactInfoLinks()
])

export default ContactPage;