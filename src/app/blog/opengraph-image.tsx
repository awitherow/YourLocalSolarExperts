import { createOpenGraphImage } from "utils/createOpenGraphImage";

export default async function og() {
  return createOpenGraphImage({
    title: `Smart Lawn Guide Blog`,
    description: `Discover a wealth of gardening info! Explore categories on soil health, water conservation, plants, and more. Find tips and content tailored to your needs.`,
  });
}
