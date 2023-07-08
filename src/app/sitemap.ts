import { MetadataRoute } from "next";
import { toKebabCase } from "utils";

import { getCities } from "data";

type CityType = {
  zip_code: number;
  city: string;
  state: string;
  county: string;
};

export const articleSlugs: string[] = ["maximizing-solar-installation-efficiency", "pros-cons-solar-installations"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "yourlocalsolarexperts.com",
      lastModified: new Date(),
    },
    {
      url: "yourlocalsolarexperts.com/consult",
      lastModified: new Date(),
    },
    {
      url: "yourlocalsolarexperts.com/categories",
      lastModified: new Date(),
    },
    {
      url: "yourlocalsolarexperts.com/blog",
      lastModified: new Date(),
    },
    // ...(getCities as CityType[])?.map(({ zip_code, city, state, county }) => ({
    //   url: `yourlocalsolarexperts.com/service-areas/${toKebabCase(
    //     `${city} ${state} ${zip_code}}`
    //   )}`,
    //   lastModified: new Date(),
    // })),
    ...(await Promise.all(articleSlugs.map((slug) => import(`posts/${slug}.mdx`))))
      .reduce<string[]>(
        (acc, { metadata }) => [...acc, ...metadata.tags.filter((tag: string) => !acc.includes(tag))],
        []
      )
      .map((category) => ({
        url: `yourlocalsolarexperts.com/categories/${toKebabCase(category)}`,
        lastModified: new Date(),
      })),
    ...articleSlugs.map((slug) => ({
      url: `yourlocalsolarexperts.com/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
