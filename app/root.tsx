import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/tailwind.css';
import basicStyles from '~/styles/commonStyles.css';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import Topbar, { links as topBarLinks } from '~/components/Topbar/Topbar';
import Footer, { links as footerLinks } from '~/components/Footer/Footer';
import { NextUIProvider } from '@nextui-org/react';

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'stylesheet', href: basicStyles },
    ...topBarLinks(),
    ...footerLinks(),
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&family=Roboto+Condensed:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <NextUIProvider>
                    <div className="w-full flex flex-col justify-center items-center dark text-foreground bg-background">
                        <Topbar />
                        <Outlet />
                        <Footer />
                    </div>
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </NextUIProvider>
            </body>
        </html>
    );
}
