import Image from "next/image";
import NextLink from "next/link";
import CtaFooter from "components/CtaFooter";

import { getArticles } from "data";
import { toKebabCase, trimText } from "utils";
import Link from "next/link";
import { headingStyle, subHeadingStyle } from "styles";

const BlogPage = async () => (
  <>
    <div className="text-center">
      <h1 className={headingStyle}>Smart Lawn Guide Blog</h1>
      <p className={subHeadingStyle}>
        There are things that you would otherwise NEVER FIND OUT from your Utility company unless you look here. Why
        would a monopoly be incentivized to tell you the truth. Free yourself, your energy, and your life with the
        Truth.
      </p>
    </div>
    <div className="mt-16 space-y-10 lg:mt-20 lg:space-y-20">
      {(await getArticles()).map((article) => (
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
                <NextLink
                  href={`/blog/${article.slug}`}
                  className="rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200"
                >
                  <span className="absolute inset-0" />
                  {article.title}
                </NextLink>
              </h2>
              <p className="mt-5 text-sm leading-6 text-white">{trimText(article.description, 160)}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
    <CtaFooter />
  </>
);

export default BlogPage;
