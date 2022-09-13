import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import sanity from "lib/sanity";

import { getAllBlogPosts } from "queries/blog";

import { posts } from "data";

import Layout from "components/Layout";
import { BlogPost } from "components/BlogPost";

const BLOG_TITLE = "Solar Education";
const BLOG_DESCRIPTION =
  "It's your right to knowledge about the Energy Economy, Solar and how to Own your Energy and Stop Renting from Utility.";

export const BlogPosts = () => {
  const subtitleText = mode("gray.600", "gray.400");

  return (
    <Layout
      title="learn"
      description={BLOG_DESCRIPTION}
      id="learn"
      wrapperStyles={{ my: 8 }}
    >
      <Box textAlign="center" maxW="lg" mx="auto" mb={16} px={4}>
        <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
          {BLOG_TITLE}
        </Heading>
        <Text mt="4" fontSize="lg" color={subtitleText}>
          {BLOG_DESCRIPTION}
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="14">
        {posts?.map((item, i) => (
          <BlogPost key={i} post={item} />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export const getServerSideProps = async ({ asPath }) => ({
  props: {
    posts: await sanity.fetch(getAllBlogPosts),
  },
});

export default BlogPosts;
