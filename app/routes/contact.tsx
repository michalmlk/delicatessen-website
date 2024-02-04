import React from 'react'
import { MetaFunction } from '@remix-run/node';
import ContactInfo, { ContactInfoProps, links as contactInfoLinks } from '~/components/ContactInfo/ContactInfo'
import { load } from '~/lib/datocms';
import { useLoaderData } from '@remix-run/react';
import Banner from '~/components/Banner/Banner';

export const meta: MetaFunction = () => ([
    {title: 'Kontakt - Quchnia Bednarek'}
])

const CONTACT_PAGE_QUERY = `{
  allContactpages{
    id,
    contact {
      id,
      title,
      subtitle,
      description,
      contactpageimage {
        url,
        alt
      }
      phoneNumber1,
      phoneNumber2
    }
  }
}`;

export const loader = () => (
  load({
    query: CONTACT_PAGE_QUERY,
    excludeInvalid: false,
    includeDrafts: true,
    variables: {}
  })
)

const ContactPage: React.FC = () => {
  const { allContactpages } = useLoaderData<typeof loader>();

  const { contact } = allContactpages[0];

  return (
    <div className='pageContentWrapper withBanner' style={{marginTop: 0, padding: 0}}>
    <Banner localImage={contact.contactpageimage.url} />
      <div className="contentWithBannerWrapper">
      <h1 className='heading'>{contact.title}</h1>
        <ContactInfo contact={contact} />
      </div>
    </div>
  )
}

export const links = () => ([
    ...contactInfoLinks()
])

export default ContactPage;