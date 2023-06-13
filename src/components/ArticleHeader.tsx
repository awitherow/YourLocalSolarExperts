"use client";

import { Heading1, Paragraph } from "mdx-components";
import Image from "next/image";
import Link from "next/link";
import { toKebabCase } from "utils";
import BlogImage from "./BlogImage";

export type Metadata = {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  image: string;
};

export function ArticleHeader({ metadata }: { metadata: Metadata }) {
  return (
    <>
      <Heading1>{metadata.title}</Heading1>
      <div className="flex flex-wrap items-center mb-4">
        <time
          dateTime={new Date(metadata.date).toISOString()}
          className="rounded-lg px-2 py-1 bg-blue-500 text-white text-sm md:text-base -ml-1 mr-3 mb-2"
        >
          {new Date(metadata.date).toLocaleDateString("en-GB", {
            dateStyle: "long",
          })}
        </time>
        {metadata.tags.map((tag) => {
          const kebabTab = toKebabCase(tag);
          return (
            <Link
              href={`/categories/${kebabTab}`}
              key={kebabTab}
              className="rounded-lg px-2 py-1 bg-green-500 text-white text-sm md:text-base -ml-1 mr-3 mb-2"
            >
              {tag}
            </Link>
          );
        })}
      </div>
      <BlogImage src={metadata.image} alt={""} />
      <Paragraph>{metadata.description}</Paragraph>
    </>
  );
}
