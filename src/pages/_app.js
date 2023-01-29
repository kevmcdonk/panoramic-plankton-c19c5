import '../css/main.css';
import { WithNinetailedProvider } from '../utils/ninetailed-helpers';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=UA-92969702-1"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-92969702-1', {
                        page_path: window.location.pathname,
                    });
                    `
                }}
            />
            <WithNinetailedProvider>
                <Component {...pageProps} />
            </WithNinetailedProvider>
        </>
    );
}
