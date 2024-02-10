import React from 'react';
import { MetaFunction } from '@remix-run/node';
import { load } from '~/lib/datocms';
import { useLoaderData } from '@remix-run/react';
import Banner from '~/components/Banner/Banner';

export const meta: MetaFunction = () => {
    return [{ title: 'O nas - Quchnia Bednarek' }];
};

const ABOUT_QUERY = `{
  allAboutpages {
    id,
    about {
      id,
      title,
      description,
      photo {
        url
      }
    }
  }
}`;

export const loader = () =>
    load({
        query: ABOUT_QUERY,
        variables: {},
        excludeInvalid: false,
        includeDrafts: true,
    });

const AboutPage: React.FC = () => {
    const { allAboutpages } = useLoaderData<typeof loader>();

    const { about } = allAboutpages[0];
    console.log(about);

    return (
        <div className="pageContentWrapper withBanner" style={{ marginTop: 0, padding: 0 }}>
            <Banner localImage={about.photo.url} />
            <div className="contentWithBannerWrapper">
                <h1 className="heading">{about.title}</h1>
                <p>{about.description}</p>
            </div>
        </div>
    );
};

export const links = () => [];

export default AboutPage;
