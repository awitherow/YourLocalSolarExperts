import React from "react";
import NextLink from "next/link";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { VscCircleFilled } from "react-icons/vsc";

export const BlogPost = ({ post, isHero, slug }) => {
  const sectionHeaderSize = useBreakpointValue({
    base: "md",
    lg: "lg",
    xl: "xl",
  });

  const WrapperComponent = slug ? NextLink : Box;

  return (
    <WrapperComponent
      {...(slug && {
        href: slug,
        passHref,
      })}
    >
      <Stack spacing="8" px={4}>
        <Box overflow="hidden">
          <Image
            src={post?.image}
            alt={post?.title}
            width="full"
            height={useBreakpointValue({
              base: "15rem",
              md: isHero ? "sm" : "15rem",
            })}
            objectFit="cover"
            transition="all 0.2s"
            _groupHover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <Stack spacing="6">
          <Stack spacing="3">
            <HStack
              spacing="1"
              fontSize="sm"
              fontWeight="semibold"
              color="accent"
            >
              <Text>{post?.author?.name}</Text>
              <Icon as={VscCircleFilled} boxSize="2" />
              <Text> {post?.publishedAt}</Text>
            </HStack>
            <Heading size={sectionHeaderSize}>{post?.title}</Heading>
            <Text color="muted">{post?.excerpt}</Text>
          </Stack>
          <HStack>
            {post?.tags.map((tag, id) => (
              <Badge key={id} colorScheme={tag?.color}>
                {tag?.label}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </WrapperComponent>
  );
};
