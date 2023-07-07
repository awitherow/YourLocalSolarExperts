export default async function og({ params }: { params: { slug: string } }) {
  try {
    const { metadata } = await import(`posts/${params.slug}.mdx`);

    return `The OpenGraph 1200x630 image for the ${metadata.title} with a ${metadata.color} background and the description: ${metadata.description}`;
  } catch {
    return "";
  }
}
