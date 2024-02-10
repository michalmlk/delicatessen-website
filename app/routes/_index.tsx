import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Articles, { links as articlesLinks } from '~/components/Articles/Articles';
import { load } from '~/lib/datocms';
import indexBanner from '../assets/banner.png';
import Banner from '~/components/Banner/Banner';

export const meta: MetaFunction = () => {
    return [{ title: 'Quchnia Bednarek' }];
};

const HOMEPAGE_QUERY = `{
  allArticles {
    id
    content
    _status
    _firstPublishedAt
  }
  _allArticlesMeta {
    count
  }
}`;

export const loader = async () => {
    return load({
        query: HOMEPAGE_QUERY,
        variables: {},
        includeDrafts: true,
        excludeInvalid: false,
    });
};

export default function Index() {
    const { allArticles } = useLoaderData<typeof loader>();
    return (
        <div className="w-full min-h-screen flex flex-col items-start justify-center">
            <Banner localImage={indexBanner} backgroundColor="#1f1b20" />
            <Articles data={allArticles} />
            <div className="pageContentWrapper">
                <h1> test</h1>
            </div>
        </div>
    );
}

export const links = () => [...articlesLinks()];
