import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Articles, { links as articlesLinks } from '~/components/Articles/Articles';
import { load } from '~/lib/datocms';
import { Button } from '@nextui-org/react';

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

    const handleMenuScroll = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <div className="pageContentWrapper homepage">
            <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
                <h1 style={{ fontSize: '5rem', textTransform: 'uppercase', fontWeight: '300' }}>
                    Family gastro
                </h1>
                <h3>Categing Bednarek</h3>
                <p style={{ textAlign: 'center' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur obcaecati
                    nulla optio error quisquam. Perspiciatis est, eos eligendi quae unde asperiores,
                    vero tempora perferendis rerum deserunt maxime fugit quod vitae!
                </p>
                <Button size="lg" onClick={handleMenuScroll}>
                    Check menu
                </Button>
            </div>
            <div
                className="flex justify-center px-0"
                style={{
                    height: 'calc(100vh - 160px)',
                }}
            >
                <Articles data={allArticles} />
            </div>
        </div>
    );
}

export const links = () => [...articlesLinks()];
