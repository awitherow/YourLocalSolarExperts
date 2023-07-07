"use client";

import { Heading1, Heading2 } from "mdx-components";

import BlogImage from "./BlogImage";
import CategoryTag from "./Tags/Category";
import DateTag from "./Tags/Date";

export type Metadata = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export function ArticleHeader({ metadata, withAds = false }: { metadata: Metadata; withAds?: boolean }) {
  return (
    <>
      <Heading1>{metadata.title}</Heading1>
      <div className="flex flex-wrap items-center mb-4">
        <DateTag date={metadata.datePublished} />
        {metadata.tags.map((tag) => (
          <CategoryTag tag={tag} key={tag} />
        ))}
      </div>
      <BlogImage src={metadata.image} alt={metadata.imageAlt ?? ""} />
      {withAds ? (
        <p className="text-xs text-gray-400 mt-1 text-right">
          This post may contain advertisements through Ezoic and Amazon.
        </p>
      ) : null}
      <Heading2>{metadata.description}</Heading2>
    </>
  );
}
