import { getProducts } from "data";
import { headingStyle, subHeadingStyle } from "styles";
import CtaFooter from "components/CtaFooter";
import { ProductCard } from "components/ProductCard";
import { toKebabCase } from "utils";

export default async function GuidesPage() {
  return (
    <>
      <div className="text-center">
        <h1 className={headingStyle}>Guides, Products and Services</h1>
        <p className={subHeadingStyle}>
          Explore our vast collection of gardening guides, a selection of
          organic and heirloom seeds, the best gardening tools for any task, and
          comprehensive services to help your garden thrive. Whether you are a
          seasoned gardener or just starting out, we have everything you need
          for your green thumb journey.
        </p>
      </div>

      <div className="grid gap-8 lg:gap-10 mt-8 lg:my-12 xl:my-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {getProducts().map((guide, i) => (
          <ProductCard
            key={i}
            product={{ ...guide, slug: toKebabCase(guide.name) }}
          />
        ))}
      </div>

      <CtaFooter />
    </>
  );
}
