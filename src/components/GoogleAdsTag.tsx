import Script from "next/script";
import { site } from "@/lib/site-data";

export function GoogleAdsTag() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.googleAdsId}');
        `}
      </Script>
    </>
  );
}
