import { MetadataRoute } from "next";
import { toKebabCase } from "utils";

import { getCities } from "data";

type CityType = {
  zip_code: number;
  city: string;
  state: string;
  county: string;
};

export const articleSlugs: string[] = ["maximizing-solar-installation-efficiency"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.smartlawn.guide",
      lastModified: new Date(),
    },
    {
      url: "https://www.smartlawn.guide/consult",
      lastModified: new Date(),
    },
    {
      url: "https://www.smartlawn.guide/categories",
      lastModified: new Date(),
    },
    {
      url: "https://www.smartlawn.guide/blog",
      lastModified: new Date(),
    },
    // ...(getCities as CityType[])?.map(({ zip_code, city, state, county }) => ({
    //   url: `https://www.smartlawn.guide/service-areas/${toKebabCase(
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
        url: `https://www.smartlawn.guide/categories/${toKebabCase(category)}`,
        lastModified: new Date(),
      })),
    ...articleSlugs.map((slug) => ({
      url: `https://www.smartlawn.guide/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
