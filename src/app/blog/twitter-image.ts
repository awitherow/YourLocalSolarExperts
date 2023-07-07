import { createTwitterImage } from "utils/createTwitterImage";

export default async function twitterImage() {
  return createTwitterImage({
    title: `Smart Lawn Guide Blog`,
    description: `Discover a wealth of gardening info! Explore categories on soil health, water conservation, plants, and more. Find tips and content tailored to your needs.`,
  });
}
