import { createOpenGraphImage } from "utils/createOpenGraphImage";
import { classNames } from "data/tailwind";

export default async function og({ params }: { params: { slug: string } }) {
  try {
    const { metadata } = await import(`posts/${params.slug}.mdx`);

    return createOpenGraphImage({
      title: metadata.title,
      description: metadata.description,
      color: classNames.filter(({ id }) => id === metadata.color)?.[0]?.color,
    });
  } catch {
    return createOpenGraphImage({});
  }
}
