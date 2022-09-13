export const getPostBySlug = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    author-> {
      name,
      title,
      image,
      slug
    },
    "categories": categories[]-> {
      title
    },
    mainImage {
      ...
    },
    body,
    type,
    publishedAt,
    products[] -> {
      ...
    },
    "numberOfCharacters": length(pt::text(body)),
    // assumes 5 characters as mean word length
    // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    // Words per minute: 180
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }`;

export const getAllBlogPosts = `
*[_type == "post" && published == true] | order(updatedNewestFirst) {
    categories[]-> {
      title
    },
    author-> {
      name,
      title,
      image,
      slug,
    },
    published,
    type,
    slug,
    title,
    description,
    mainImage,
}`;

export const getBlogPostsByCategory = `
*[_type == "post" && published == true && count(categories[@->title in $categories]) > 0] | order(updatedNewestFirst) {
    categories[]-> {
      title
    },
    author-> {
      name,
      title,
      image,
      slug,
    },
    type,
    slug,
    title,
    description,
    mainImage,
}`;
