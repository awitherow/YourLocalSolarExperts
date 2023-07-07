export default async function og({ params }: { params: { slug: string } }) {
  try {
    const { metadata } = await import(`posts/${params.slug}.mdx`);

    return `The Twitter 1900x600 image for the ${metadata.title} with a ${metadata.color} background and the description: ${metadata.description}`;
  } catch {
    return "";
  }
}
