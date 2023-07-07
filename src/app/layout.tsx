import React from "react";
import NextLink from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import { DEFAULT_METADATA } from "data/seo";

import "./globals.css";
import Script from "next/script";

interface LayoutProps {
  children: React.ReactNode;
}

export const generateMetadata = (): Metadata => DEFAULT_METADATA;

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <Analytics />
    <meta name="p:domain_verify" content="9df5a8c506144650de26b1b9744e6e88" />
    {process.env.NODE_ENV !== "development" && (
      <>
        {/* <Script
          strategy="afterInteractive"
          id="gtag"
          src="https://www.googletagmanager.com/gtag/js?id=G-361FWTRLD3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-361FWTRLD3');
      `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2149528894778035"
          crossOrigin="anonymous"
        /> */}
      </>
    )}
    <body className="bg-slate-400">
      <ToastContainer />
      <div
        className="min-h-screen max-w-8xl mx-auto w-full bg-slate-400 pb-4 text-white md:bg-contain bg-no-repeat bg-top relative overflow-hidden"
        style={{ backgroundImage: "url(/bg.webp)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-2 py-2 sm:px-5 sm:py-5 max-w-4xl mx-auto bg-slate-700 bg-opacity-80 lg:mt-4 lg:rounded-lg">
          <NextLink href="/" passHref>
            <div className="flex flex-row items-center justify-start">
              <Image width={48} height={48} src="/logo.png" alt="Your Local Solar Experts logo" />
              <div className="flex flex-col items-start justify-center ml-2">
                <h1 className="text-sm sm:text-md md:text-lg text-white font-bold">Your Local Solar Experts</h1>
                <p className="mt-0 text-xs sm:text-sm md:text-base text-white font-light">
                  Stop Renting and Start Owning Your Energy
                </p>
              </div>
            </div>
          </NextLink>

          <div className="flex items-center space-x-2 text-sm md:text-lg my-4 md:my-0">
            {/* <NextLink
              href="/guides"
              className="text-white hover:text-slate-600"
            >
              Guides
            </NextLink> */}
            <NextLink href="/blog" className="text-white hover:text-slate-600">
              Blog
            </NextLink>
            <NextLink href="/categories" className="text-white hover:text-slate-600">
              Categories
            </NextLink>
            <NextLink href="/consult" className="text-white hover:text-slate-600">
              Free Quote
            </NextLink>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col flex-grow mt-16 md:mt-24 lg:md-32 px-3 max-w-5xl mx-auto">
          {children}
        </div>
        <footer className="text-center text-white mt-16">
          <div className="p-4 text-center">
            © 2023 Copyright:
            <NextLink className="text-white" href="/">
              Your Local Solar Experts
            </NextLink>
          </div>
          <a className="text-xs" href="https://www.flaticon.com">
            Icons by Freepik - Flaticon
          </a>
        </footer>
      </div>
    </body>
  </html>
);

export default Layout;
