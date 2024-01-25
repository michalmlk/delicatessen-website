import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from '~/tailwind.css';
import basicStyles from '~/styles/commonStyles.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Topbar, { links as topBarLinks } from "~/components/Topbar/Topbar";
import Footer, { links as footerLinks } from '~/components/Footer/Footer';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: basicStyles },
  ...topBarLinks(),
  ...footerLinks()
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-full flex flex-col justify-center items-center">
          <Topbar />
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
