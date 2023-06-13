import CtaFooter from "components/CtaFooter";
import { headingStyle, secondaryHeaderStyles, subHeadingStyle } from "styles";
import { reverseKebabToTitleCase, toKebabCase, trimText } from "utils";
import { getArticles } from "data";
import Link from "next/link";
import Image from "next/image";

const getPrettyDescription = (prettySlug: string) => `Everything you need to know about ${prettySlug}`;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const prettySlug = reverseKebabToTitleCase(params.slug);
  const title = `Smart Lawn Guide | ${prettySlug}`;
  const description = getPrettyDescription(prettySlug);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function CategoryPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const category = reverseKebabToTitleCase(slug);
  const articlesByCategory = (await getArticles()).filter((article) => article.tags.includes(category));

  return (
    <>
      <div className="text-center max-w-2xl lg:max-w-4xl mx-auto" id={`${slug}`}>
        <h1 className={headingStyle}>
          Everything About <br />
          <span className="text-5xl/snug sm:text-6xl/snug md:text-8xl/snug">{category}</span>
        </h1>
        <p className={subHeadingStyle}>{getPrettyDescription(slug)}</p>
      </div>
      <div className="flex flex-col flex-start justify-center mt-8">
        <div className="space-y-10" key={category}>
          <div className="flex justify-between items-center">
            <h2 id="articles" className={secondaryHeaderStyles}>
              Articles
            </h2>
            <a href={`#${slug}`}>
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

          <div className="mt-16 space-y-10 lg:mt-20 lg:space-y-20">
            {articlesByCategory.map((article) => (
              <article key={article.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 bg-gray-50">
                  <Image src={article.image} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 shadow-inner bg-gradient-to-br from-white/20" />
                </div>
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center text-xs">
                    <time
                      dateTime={new Date(article.date).toISOString()}
                      className="rounded-lg px-2 py-1 bg-blue-500 text-white -ml-1 mr-3 mb-2"
                    >
                      {new Date(article.date).toLocaleDateString("en-GB", {
                        dateStyle: "long",
                      })}
                    </time>
                    {article.tags.map((tag) => (
                      <Link
                        href={`/categories/${toKebabCase(tag)}`}
                        key={tag}
                        className="rounded-lg px-2 py-1 bg-green-500 text-white -ml-1 mr-3 mb-2"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <div className="group relative">
                    <h2 className="mt-3 text-lg/snug sm:text-xl/snug md:text-2xl/snug font-semibold text-white-900 group-hover:text-gray-200">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200"
                      >
                        <span className="absolute inset-0" />
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-5 text-sm leading-6 text-white">{trimText(article.description, 160)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <CtaFooter />
    </>
  );
}
