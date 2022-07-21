import React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  IconButton,
  Center,
  LightMode,
  ButtonGroup,
  Avatar,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FaAccessibleIcon } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import { FiHelpCircle, FiMenu, FiSettings } from "react-icons/fi";

const Logo = () => <>YLSE</>;

export const posts = [
  {
    id: "1",
    title: "How to write a great blog post",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
    image:
      "https://images.unsplash.com/photo-1524492449090-a4e289316d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80",
    tags: [
      { label: "Community", color: "blue" },
      { label: "Tutorials", color: "green" },
    ],
    publishedAt: "Januar 28, 2023",
    author: {
      name: "Busola Banks",
      avatarUrl: "https://tinyurl.com/2p8fy9ym",
    },
  },
  {
    id: "2",
    title: "2022 Developer Survey",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "https://tinyurl.com/4wzh2ph9",
    tags: [
      { label: "Community", color: "blue" },
      { label: "Research", color: "red" },
    ],
    publishedAt: "December 29, 2022",
    author: {
      name: "Samy Tom",
      avatarUrl: "https://tinyurl.com/2p8h98w8",
    },
  },
  {
    id: "3",
    title: "Women in Tech",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://tinyurl.com/5czjdxj7",
    tags: [{ label: "Community", color: "blue" }],
    publishedAt: "November 30, 2022",
    author: {
      name: "Angelina Gates",
      avatarUrl: "https://tinyurl.com/2p98t7nh",
    },
  },
  {
    id: "4",
    title: "Using Chakra UI in Sketch",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.",
    image: "https://tinyurl.com/yh2xkpzm",
    tags: [{ label: "Design", color: "yellow" }],
    publishedAt: "October 31, 2022",
    author: {
      name: "Busola Banks",
      avatarUrl: "https://tinyurl.com/2p8fy9ym",
    },
  },
];

export const BlogPost = (props) => {
  const { post, isHero } = props;
  return (
    <Link _hover={{ textDecor: "none" }} role="group">
      <Stack spacing="8">
        <Box overflow="hidden">
          <Image
            src={post.image}
            alt={post.title}
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
              <Text>{post.author.name}</Text>
              <Icon as={VscCircleFilled} boxSize="2" />
              <Text> {post.publishedAt}</Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              {post.title}
            </Heading>
            <Text color="muted">{post.excerpt}</Text>
          </Stack>
          <HStack>
            {post.tags.map((tag, id) => (
              <Badge key={id} colorScheme={tag.color}>
                {tag.label}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Link>
  );
};

export const features = [
  {
    name: "210+ Components",
    description:
      "Chakra UI Pro has 210+ componentsto help you develop your project faster.",
    icon: BsStars,
  },
  {
    name: "Production Ready",
    description:
      "Effortlessly create your next production-ready experience with Chakra UI Pro components.",
    icon: IoRocketSharp,
  },
  {
    name: "Accessible",
    description:
      "Accessibility first. That's why we pay attention to accessibility right from the start.",
    icon: FaAccessibleIcon,
  },
];

import { ImQuotesLeft } from "react-icons/im";

export const Testimonial = (props) => {
  const { image, name, role, children } = props;
  return (
    <Stack
      as="blockquote"
      direction="row"
      spacing={{ base: "0", md: "8" }}
      flex="1"
      {...props}
    >
      <Img
        display={{ base: "none", md: "block" }}
        mt="2"
        flexShrink={0}
        src={image}
        alt={name}
        objectFit="cover"
        w={{ base: "20", md: "32" }}
        h={{ base: "20", md: "32" }}
        rounded="full"
      />
      <Flex w="full" direction="column">
        <Box mb="6">
          <Box
            as={ImQuotesLeft}
            color={mode("blue.600", "blue.400")}
            fontSize="xl"
          />
          <Text mt="3" fontSize="xl" fontWeight="bold" maxW="38rem">
            {children}
          </Text>
        </Box>
        <HStack>
          <Img
            display={{ base: "block", md: "none" }}
            flexShrink={0}
            src={image}
            alt={name}
            objectFit="cover"
            w={{ base: "12", md: "32" }}
            h={{ base: "12", md: "32" }}
            rounded="full"
          />
          <Box>
            <Text
              as="cite"
              fontStyle="normal"
              fontWeight="extrabold"
              color={mode("blue.600", "blue.400")}
            >
              {name}
            </Text>
            <Text fontSize="sm" color={mode("gray.600", "gray.400")}>
              {role}
            </Text>
          </Box>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default function LandingPage() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box as="section">
        <Box as="nav" bg="bg-surface" boxShadow={mode("sm", "sm-dark")}>
          <Container py={{ base: "3", lg: "4" }}>
            <Flex justify="space-between">
              <HStack spacing="4">
                <Logo />
                {isDesktop && (
                  <ButtonGroup variant="ghost" spacing="1">
                    <Button>Home</Button>
                    <Button aria-current="page">Dashboard</Button>
                    <Button>Tasks</Button>
                    <Button>Bookmarks</Button>
                    <Button>Users</Button>
                  </ButtonGroup>
                )}
              </HStack>
              {isDesktop ? (
                <HStack spacing="4">
                  <ButtonGroup variant="ghost" spacing="1">
                    <IconButton
                      icon={<FiSearch fontSize="1.25rem" />}
                      aria-label="Search"
                    />
                    <IconButton
                      icon={<FiSettings fontSize="1.25rem" />}
                      aria-label="Settings"
                    />
                    <IconButton
                      icon={<FiHelpCircle fontSize="1.25rem" />}
                      aria-label="Help Center"
                    />
                  </ButtonGroup>
                  <Avatar
                    boxSize="10"
                    name="Christoph Winston"
                    src="https://tinyurl.com/yhkm2ek8"
                  />
                </HStack>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </Flex>
          </Container>
        </Box>
      </Box>
      <Box
        as="section"
        bg="gray.800"
        py="12"
        position="relative"
        h={{ base: "560px", md: "640px" }}
        bgImage="url(https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80)"
        bgSize="cover"
        bgPosition="center"
        _after={{
          content: `""`,
          display: "block",
          w: "full",
          h: "full",
          bg: "blackAlpha.700",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          h="full"
          zIndex={1}
          position="relative"
        >
          <Center
            flexDirection="column"
            textAlign="center"
            color="white"
            h="full"
          >
            <Heading size="2xl" fontWeight="extrabold">
              Stop Renting. Start Owning Your Energy.
            </Heading>
            <Text fontSize="lg" fontWeight="medium" mt="3">
              Yep, it's possible, and easy., and it's never been more affordable
              than RIGHT NOW TODAY, seriously. Let's get a free proposal written
              up for you and set you up for for massive savings in solar.
            </Text>
            <LightMode>
              <Button
                colorScheme="blue"
                size="lg"
                mt="6"
                fontWeight="bold"
                fontSize="md"
              >
                Get Your Free Proposal
              </Button>
            </LightMode>
          </Center>
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          zIndex={2}
          w="full"
          bottom="0"
          py="4"
          bg="blackAlpha.400"
        >
          <Box maxW={{ base: "xl", md: "7xl" }} mx="auto">
            <SimpleGrid columns={{ base: 1, md: 3 }}>
              <Box textAlign="center" color="white">
                <Text>A Gig is won every</Text>
                <Text fontSize="3xl">10 MIN</Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Transactions</Text>
                <Text fontSize="3xl">6.4M+</Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Price Range</Text>
                <Text fontSize="3xl">$5k - $12K</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box as="section" bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                Our Mission
              </Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                With this beautiful and responsive React components you will
                realize your next project in no time.
              </Text>
            </Stack>
            <Stack
              spacing="3"
              direction={{ base: "column", sm: "row" }}
              justify="center"
            >
              <Button variant="secondary" size="lg">
                Learn more
              </Button>
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "12", lg: "16" }}
          >
            <Stack
              spacing={{ base: "8", md: "10" }}
              width="full"
              justify="center"
            >
              <Stack spacing={{ base: "4", md: "6" }}>
                <Heading size={useBreakpointValue({ base: "sm", md: "lg" })}>
                  Ready for your free trial?
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                  No credit card is required. You'll be ready to go within a few
                  minutes. Let's go.
                </Text>
              </Stack>
              <Stack
                direction={{ base: "column-reverse", md: "row" }}
                spacing="3"
              >
                <Button variant="secondary" size="lg">
                  Learn more
                </Button>
                <Button variant="primary" size="lg">
                  Start free trial
                </Button>
              </Stack>
            </Stack>
            <Image
              width="full"
              height={{ base: "auto", md: "lg" }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1600188769045-bc6026bfc8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </Stack>
        </Container>
      </Box>
      <Box bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "12", lg: "16" }}
          >
            <Stack
              spacing={{ base: "8", md: "10" }}
              width="full"
              justify="center"
            >
              <Stack spacing={{ base: "4", md: "6" }}>
                <Heading size={useBreakpointValue({ base: "sm", md: "lg" })}>
                  Ready for your free trial?
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                  No credit card is required. You'll be ready to go within a few
                  minutes. Let's go.
                </Text>
              </Stack>
              <Stack
                direction={{ base: "column-reverse", md: "row" }}
                spacing="3"
              >
                <Button variant="secondary" size="lg">
                  Learn more
                </Button>
                <Button variant="primary" size="lg">
                  Start free trial
                </Button>
              </Stack>
            </Stack>
            <Image
              width="full"
              height={{ base: "auto", md: "lg" }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1600188769045-bc6026bfc8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </Stack>
        </Container>
      </Box>
      <Box as="section" bg={mode("gray.50", "gray.800")}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <SimpleGrid
            py="16"
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: "16", lg: "32" }}
          >
            <Testimonial
              name="Jane Cooper"
              role="Marketing Manager @ Freeko.com"
              image="https://images.unsplash.com/photo-1571175351749-e8d06f275d85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Testimonial>
            <Testimonial
              name="Matt Godin"
              role="Engineering Manager @ Freezone"
              image="https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbmRzb21lJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
              Accumsan tortor posuere ac ut consequat semper. Turpis cursus in
              hac habitasse platea. Hendrerit dolor magna eget est
            </Testimonial>
          </SimpleGrid>
        </Box>
      </Box>
      <Box bg="bg-surface">
        <Box bg="bg-accent" color="on-accent">
          <Container
            pt={{ base: "16", md: "24" }}
            pb={{ base: "32", md: "48" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} align="center">
              <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
                <Stack spacing="4">
                  <Text
                    fontWeight="semibold"
                    color="blue.50"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Our Blog
                  </Text>
                  <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
                    Latest blog posts
                  </Heading>
                </Stack>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  maxW="2xl"
                  color="on-accent-muted"
                >
                  Ice cream pudding dragée macaroon donut marzipan chocolate
                </Text>
              </Stack>
              <InputGroup size="lg" maxW={{ md: "sm" }}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="on-accent" boxSize="5" />
                </InputLeftElement>
                <Input
                  placeholder="Search"
                  variant="filled"
                  colorScheme="blue"
                />
              </InputGroup>
            </Stack>
          </Container>
        </Box>
        <Container
          pb={{ base: "16", md: "24" }}
          mt={{ base: "-16", md: "-24" }}
        >
          <Stack spacing={{ base: "16", md: "24" }}>
            <Stack spacing={{ base: "12", md: "16" }}>
              <BlogPost post={posts[0]} isHero />
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                gap={{ base: "12", lg: "8" }}
              >
                {posts.slice(1, 4).map((post) => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box as="section" bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                Our Mission
              </Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                With this beautiful and responsive React components you will
                realize your next project in no time.
              </Text>
            </Stack>
            <Stack
              spacing="3"
              direction={{ base: "column", sm: "row" }}
              justify="center"
            >
              <Button variant="secondary" size="lg">
                Learn more
              </Button>
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
