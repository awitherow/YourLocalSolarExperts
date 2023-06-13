import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import CtaFooter from "components/CtaFooter";
import { toKebabCase } from "utils";
import { getLatestArticles } from "data";
import { headingStyle, subHeadingStyle } from "styles";

const Page = async () => (
  <>
    <div className="text-center sm:pt-10 md:pt-20 lg:pt-30 mb-24" id="procedures">
      <h1 className={headingStyle}>
        Stop Renting. <br />
        Start Owning Your Energy.
      </h1>
      <p className={subHeadingStyle}>
        Let&apos;s get a free quote written up for you and set you up for massive savings in solar.
      </p>
    </div>

    <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <div className="my-16 sm:my-24 lg:my-32 text-center">
        <h1 className={headingStyle}>Why Solar?</h1>
        <p className={subHeadingStyle}>
          Discover the advantages of owning your energy and how solar can benefit your life. Your Local Solar Experts
          are here to field any questions that you might have about Solar and Clean Energy as you transition towards
          owning your energy, and no longer renting from Utility.
        </p>
      </div>

      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
        {(await getLatestArticles(3)).map((article) => (
          <article key={article.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 bg-gray-50">
              <Image src={article.image} alt="" fill className="object-cover" />
              <div className="absolute inset-0 shadow-inner bg-gradient-to-br from-white/20" />
            </div>
            <div className="py-4">
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
                  <NextLink
                    href={`/categories/${toKebabCase(tag)}`}
                    key={tag}
                    className="rounded-lg px-2 py-1 bg-green-500 text-white -ml-1 mr-3 mb-2"
                  >
                    {tag}
                  </NextLink>
                ))}
              </div>
              <div className="group relative max-w-xl">
                <h2 className="mt-3 text-lg/snug sm:text-xl/snug md:text-2xl/snug font-semibold text-white-900 group-hover:text-gray-200">
                  <NextLink
                    href={`/blog/${article.slug}`}
                    className="rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-200"
                  >
                    <span className="absolute inset-0" />
                    {article.title}
                  </NextLink>
                </h2>
                <p className="mt-5 text-sm leading-6 text-white">{article.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CtaFooter />
    </div>
  </>
);

export default Page;
