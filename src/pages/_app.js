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
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "fm1q654p6c");
                    `
                }}
            />
            <WithNinetailedProvider>
                <Component {...pageProps} />
            </WithNinetailedProvider>
        </>
    );
}
