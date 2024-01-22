"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-M41SF38MQ6" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-M41SF38MQ6');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
