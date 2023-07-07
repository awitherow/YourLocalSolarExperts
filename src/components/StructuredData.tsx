import { DEFAULT_DESCRIPTION, SITE_NAME, DOMAIN } from "data/seo";
import React from "react";

interface StructuredDataProps {
  type: "WebPage" | "Article" | "Breadcrumb" | "Organization";
  url?: string;
  headline?: string;
  imageUrls?: string[];
  dateModified?: string;
  datePublished?: string;
  breadCrumbs?: string[];
}

const author = [
  {
    "@type": "Person",
    name: "Austin Witherow",
    url: `${DOMAIN}/staff/austin-witherow`,
  },
];

const getImageUrl = (url: string) => `${DOMAIN}/${url}`;

const formatBreadcrumbs = (breadcrumbs: string[]) =>
  breadcrumbs.map((breadcrumb, index) => {
    const url = `${DOMAIN}/${breadcrumb}`;
    const name = breadcrumb
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    let result = {
      "@type": "ListItem",
      position: index + 1,
      name: name,
    };

    if (index !== breadcrumbs.length - 1) result["item"] = url;

    return result;
  });

const getMarkup = ({
  type = "WebPage",
  headline = "Title of a News Article",
  imageUrls = [],
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  breadCrumbs = ["example", "bread-crumbs"],
}: StructuredDataProps) => {
  switch (type) {
    case "Organization": {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: DOMAIN,
        logo: `${DOMAIN}/logo.webp`,
      };
    }
    case "Breadcrumb": {
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: formatBreadcrumbs(breadCrumbs),
      };
    }
    case "WebPage": {
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url: DOMAIN,
      };
    }
    case "Article": {
      return {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline,
        image: imageUrls.map(getImageUrl),
        datePublished,
        dateModified,
        author,
      };
    }
  }
};

const StructuredData = (props: StructuredDataProps) => (
  <script type="application/ld+json">{JSON.stringify(getMarkup(props))}</script>
);

export default StructuredData;
