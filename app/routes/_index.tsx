import type { MetaFunction } from "@remix-run/node";
import Articles, { links as articlesLinks } from "~/components/Articles/Articles";
import Banner, {links as bannerLinks } from "~/components/Banner/Banner";

export const meta: MetaFunction = () => {
  return [
    { title: "Quchnia Bednarek" },
  ];
};


export default function Index() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Banner />
      <Articles />
    </div>
  );
}

export const links = () => ([...articlesLinks(), ...bannerLinks()])
