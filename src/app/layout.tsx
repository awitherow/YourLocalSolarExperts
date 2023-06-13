import React from "react";
import Script from "next/script";
import NextLink from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

interface LayoutProps {
  children: React.ReactNode;
}

export const generateMetadata = ({ params }): Metadata => ({
  title: "Your Local Solar Experts | Own Your Energy Today",
  description:
    "Discover the advantage of owning your energy with Your Local Solar Experts. Get expert solar installation, backed by 25-year warranty and monthly prices that compete with Utility.",
  keywords: ["solar", "clean energy", "solar experts"],
  applicationName: "Your Local Solar Experts",
  authors: [{ name: "Your Local Solar Experts", url: "https://yourlocalsolarexperts.com" }],
  creator: "Your Local Solar Experts",
  publisher: "Your Local Solar Experts",
  // TODO: extend https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph and beyond
});

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" className={inter.className}>
    <Analytics />
    <meta name="p:domain_verify" content="9df5a8c506144650de26b1b9744e6e88" />
    {process.env.NODE_ENV !== "development" && (
      <>
        <Script strategy="afterInteractive" id="gtag" src="https://www.googletagmanager.com/gtag/js?id=G-361FWTRLD3" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-361FWTRLD3');
      `}
        </Script>
      </>
    )}
    <body className="bg-slate-400">
      <ToastContainer />
      <div
        className="min-h-screen max-w-8xl mx-auto w-full bg-slate-400 pb-4 text-white md:bg-contain bg-no-repeat bg-top relative overflow-hidden"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-2 py-2 sm:px-5 sm:py-5 max-w-4xl mx-auto bg-white bg-opacity-90 lg:mt-4 lg:rounded-lg">
          <NextLink href="/" passHref>
            <div className="flex flex-row items-center justify-start">
              <Image width={40} height={40} src="/logo.png" alt="Your Local Solar Experts logo" />
              <div className="flex flex-col items-start justify-center ml-2">
                <h1 className="text-sm sm:text-md md:text-lg text-slate-900 font-bold">Your Local Solar Experts</h1>
                <p className="mt-0 text-xs sm:text-sm md:text-base text-slate-900 font-light">Own Your Energy Today</p>
              </div>
            </div>
          </NextLink>

          <div className="flex items-center space-x-2 text-sm md:text-lg mt-2">
            <NextLink href="/consult" className="text-slate-900 hover:text-slate-500">
              Get A Quote
            </NextLink>
          </div>
        </div>

        <div className="w-full flex items-center justify-center flex-col flex-grow mt-16 md:mt-24 lg:md-32 px-3 max-w-5xl mx-auto">
          {children}
        </div>
        <footer className="text-center text-white mt-16">
          <div className="p-4 text-center">Copyright Your Local Solar Experts</div>
          <a className="text-xs" href="https://www.flaticon.com">
            Icons from FlatIcon
          </a>
        </footer>
      </div>
    </body>
  </html>
);

export default Layout;
