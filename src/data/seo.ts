// exportable constants
export const DEFAULT_TITLE = "Your Local Solar Experts";
export const DEFAULT_DESCRIPTION =
  "Your Local Solar Experts: Transforming lives through solar energy ownership. Explore benefits, latest articles, and save massively with our free quotes!";
export const SITE_NAME = "Your Local Solar Experts";
export const DOMAIN = "https://yourlocalsolarexperts.com";

// referencable constants
const title = DEFAULT_TITLE;
const description = DEFAULT_DESCRIPTION;

export const DEFAULT_METADATA = {
  metadataBase: new URL(DOMAIN),
  title,
  description,
  keywords: [
    "Lawn Care Tips",
    "Smart Landscaping",
    "Eco-Friendly Lawn",
    "Sustainable Gardening",
    "Lawn Maintenance Guide",
    "Smart Lawn Solutions",
    "Green Lawn Care",
    "Organic Lawn Care",
    "Water Conservation Techniques",
    "Smart Lawn Practices",
  ],
  applicationName: "Your Local Solar Experts",
  authors: [{ name: "Austin Witherow", url: "https://adubs.me" }],
  creator: "Austin Witherow",
  publisher: "Austin Witherow",
  openGraph: {
    title,
    description,
    url: DOMAIN,
    siteName: SITE_NAME,
    type: "website",
    images: [`/opengraph-image`],
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images: [`/twitter-image`],
  },
  // TODO: extend https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph and beyond
};
