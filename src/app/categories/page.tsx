import NextLink from "next/link";

import { getArticles, getCategories } from "data";
import { toKebabCase, trimText } from "utils";
import { headingStyle, secondaryHeaderStyles, subHeadingStyle } from "styles";
import { twMerge } from "tailwind-merge";
import CtaFooter from "components/CtaFooter";

export default async function BlogPage() {
  const categories = await getCategories();
  const articles = await getArticles();

  return (
    <>
      <div className="text-center">
        <h1 id="browse" className={headingStyle}>
          Browse our Categories
        </h1>
        <p className={twMerge(subHeadingStyle, "mb-16")}>
          Whether you are looking for information on solar panel installation, energy savings, tax credits, or renewable
          energy options, our categories simplify your search. Dive in and explore content tailored to your specific
          interests and solar needs.
        </p>
      </div>

      <div className="flex flex-wrap items-center mb-8 justify-center">
        {categories.map((category) => (
          <a href={`#${category}`} key={category}>
            <div className="rounded-lg py-2 px-4 md:py-4 md:px-8 bg-slate-500 text-white m-1 md:m-2 text-md">
              {category}
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col flex-start justify-center mt-8">
        {categories.map((category) => {
          const articlesByCategory = articles.filter((article) => article.tags.includes(category));

          return (
            <div className="space-y-5" key={category}>
              <div className="flex justify-between items-center">
                <NextLink href={`/categories/${toKebabCase(category)}`}>
                  <h2 id={category} className={twMerge(secondaryHeaderStyles, "mt-8")}>
                    {category}
                  </h2>
                </NextLink>
                <a href="#browse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-white hover:text-gray-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </a>
              </div>

              <ul>
                {articlesByCategory.map((article) => (
                  <li key={article.slug} className="py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <NextLink
                          href={`/blog/${article.slug}`}
                          className="text-white-900 hover:text-gray-200 font-medium"
                        >
                          {article.title}
                        </NextLink>
                        <p className="text-xs text-gray-300 mt-2">{trimText(article.description, 120)}</p>
                      </div>
                      <span className="lg:ml-8 inline-flex items-center py-1 px-3 rounded-md text-sm font-medium bg-slate-200 text-gray-800">
                        {new Date(article.dateModified).toLocaleDateString("en-GB", {
                          dateStyle: "long",
                        })}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <CtaFooter />
    </>
  );
}
