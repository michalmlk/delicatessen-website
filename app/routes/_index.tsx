import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Articles, { links as articlesLinks } from "~/components/Articles/Articles";
import Banner, {links as bannerLinks } from "~/components/Banner/Banner";
import { load } from '~/lib/datocms';

export const meta: MetaFunction = () => {
  return [
    { title: "Quchnia Bednarek" },
  ];
};

const HOMEPAGE_QUERY = `{
  allArticles {
    id
    title
    content
    _status
    _firstPublishedAt
  }
  _allArticlesMeta {
    count
  }
}`

export const loader = async () => {
  return load({
    query: HOMEPAGE_QUERY,
    variables: {},
    includeDrafts: true,
    excludeInvalid: false,
  });
}


export default function Index() {
  const { allArticles } = useLoaderData<typeof loader>();
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Banner />
      <Articles data={allArticles} />
    </div>
  );
}

export const links = () => ([...articlesLinks(), ...bannerLinks()])
