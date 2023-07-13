import { MetadataRoute } from "next";
import { toKebabCase } from "utils";

export const articleSlugs: string[] = [
  "maximizing-solar-installation-efficiency",
  "pros-cons-solar-installations",
  "finance-solar-installation-comparing-powur-home-equity-loans-bank-loans",
  "understanding-solar-installations-and-energy-providers",
  "investing-in-solar-installations-benefits-with-powur",
  "solar-tax-credits-maximizing-savings-on-solar-installations",
  "going-off-grid-with-solar-power-a-sustainable-solution-for-energy-independence",
  "exploring-different-types-of-solar-panels-features-and-benefits",
  "save-money-reduce-carbon-footprint-solar-installations",
  "understanding-cost-benefits-solar-installations",
  "solar-installation-maintenance-key-tasks-ensure-optimal-performance",
  "how-long-does-it-take-to-install-solar-panels-understanding-the-timeline",
  "benefits-of-solar-installations-lowered-bills-energy-independence-environmental-sustainability",
  


];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://yourlocalsolarexperts.com",
      lastModified: new Date(),
    },
    {
      url: "https://yourlocalsolarexperts.com/consult",
      lastModified: new Date(),
    },
    {
      url: "https://yourlocalsolarexperts.com/categories",
      lastModified: new Date(),
    },
    {
      url: "https://yourlocalsolarexperts.com/blog",
      lastModified: new Date(),
    },
    // ...(getCities as CityType[])?.map(({ zip_code, city, state, county }) => ({
    //   url: `https://yourlocalsolarexperts.com/located-in/${toKebabCase(
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
        url: `https://yourlocalsolarexperts.com/categories/${toKebabCase(category)}`,
        lastModified: new Date(),
      })),
    ...articleSlugs.map((slug) => ({
      url: `https://yourlocalsolarexperts.com/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
