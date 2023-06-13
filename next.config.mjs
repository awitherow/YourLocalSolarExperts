import addMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

/** @type {import("next").NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/get",
        destination: "https://aegiswishes.gumroad.com/l/smart-lawn-guide",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
    ],
  },
};

export default addMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
  },
})(nextConfig);
