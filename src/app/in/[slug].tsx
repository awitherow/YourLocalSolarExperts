import CtaFooter from "components/CtaFooter";
import { headingStyle, secondaryHeaderStyles, subHeadingStyle } from "styles";
import { reverseKebabToTitleCase } from "utils";

function getCityStateZip(slug: string) {
  // Extracting the city, state, and zip code from the slug
  const parts = slug?.split("/")?.pop()?.split("-");
  const state = parts?.pop();
  const city = parts?.join(" ");

  if (city && state) {
    return [city, state];
  }

  return ["", ""];
}

const getPrettyDescription = (city: string, state: string) =>
  `Looking for reliable solar solutions in ${city}, ${state}? At YourLocalSolarExperts.com, we connect you with the best solar professionals near you. Get a free quote today!`;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const [city, state] = getCityStateZip(params?.slug);
  const title = `Your Local Solar Experts in ${city}, ${state}`;
  const description = getPrettyDescription(city, state);

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
  const [city, state] = reverseKebabToTitleCase(slug);

  return (
    <>
      <header className="bg-blue-500 text-white p-5">
        <h1 className="text-3xl">
          The Top Solar Professionals in ${city}, ${state}
        </h1>
      </header>
      <main className="p-5">
        <section>
          <h2 className="text-2xl">Why Choose Solar Energy in ${city}</h2>
          <p>[Information about the benefits of choosing solar energy in this city]</p>
        </section>
        <section>
          <h2 className="text-2xl">Transitioning to Solar in ${city}</h2>
          <p>[Brief guide on transitioning to solar energy in this city]</p>
        </section>
        <section>
          <h2 className="text-2xl">Directory of Local Solar Experts</h2>
          <ul>
            <li>
              <h3>[Solar Company Name]</h3>
              <p>[Information about the solar company]</p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl">Customer Testimonials</h2>
          <blockquote>
            <p>[Customer testimonial]</p>
            <footer>- [Customer Name]</footer>
          </blockquote>
        </section>
        <section>
          <h2 className="text-2xl">Frequently Asked Questions</h2>
          <dl>
            <dt>Q: [Question]</dt>
            <dd>A: [Answer]</dd>
          </dl>
        </section>
      </main>
      <CtaFooter />
    </>
  );
}
