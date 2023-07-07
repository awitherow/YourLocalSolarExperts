import { ArticleHeader } from "components/ArticleHeader";
import { notFound } from "next/navigation";
import CtaFooter from "components/CtaFooter";
import StructuredData from "components/StructuredData";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { metadata } = await import(`posts/${params.slug}.mdx`);

    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
      },
      twitter: {
        title: metadata.title,
        description: metadata.description,
      },
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    const { default: Content, metadata } = await import(`posts/${params.slug}.mdx`);

    return (
      <div className="mx-auto max-w-3xl text-base leading-7 text-white">
        <StructuredData type="Article" {...{ ...metadata, headline: metadata.title }} />
        <ArticleHeader metadata={metadata} />
        <Content />
        <CtaFooter />
      </div>
    );
  } catch {
    notFound();
  }
}
