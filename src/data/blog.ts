import { articleSlugs } from "app/sitemap";
import { Metadata } from "components/ArticleHeader";

export const getArticles = async () =>
  (
    await Promise.all(
      articleSlugs.map((slug) => import(`markdown/${slug}.mdx`))
    )
  )
    .map<Metadata>(({ metadata }, index) => ({
      ...metadata,
      slug: articleSlugs[index],
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getLatestArticles = async (count: number) =>
  (await getArticles())?.slice(0, count);

export async function getCategories() {
  const allTags = (await getArticles()).flatMap((article) => article.tags);
  const uniqueTags = Array.from(new Set(allTags));
  return uniqueTags;
}

export async function getPopularCategories() {
  const allTags = (await getArticles()).flatMap((article) => article.tags);
  const count = {};
  allTags.forEach((tag) => {
    if (count[tag]) {
      count[tag]++;
    } else {
      count[tag] = 1;
    }
  });

  const sortable: any[] = [];
  for (let tag in count) {
    sortable.push([tag, count[tag]]);
  }

  sortable.sort((a, b) => b[1] - a[1]);

  return sortable.slice(0, 20).map((item) => item[0]);
}
