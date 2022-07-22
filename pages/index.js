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
  Link,
  SimpleGrid,
  Stack,
  Text,
  IconButton,
  Center,
  LightMode,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { BsStars } from "react-icons/bs";
import { FaAccessibleIcon } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { VscCircleFilled } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";

const Logo = ({ src }) => {
  const logoHeight = useBreakpointValue({ base: 50, md: 60 });
  return <Image height={`${logoHeight}px`} src={src} />;
};

export const posts = [
  {
    id: "1",
    title: "How to Save 26% With the Federal Tax Credit in 2022",
    excerpt:
      "The Federal Tax Credit is going away more and more each year. As of right now in 2022, it's set at 26%. For any taxpayer, anything you do to upgrade to renewable energy can be included! This means your solar installation, any light ugprades, smart thermostats, insulation, reroofing, batteries, generators and more can be included. This Tax Credit might go away at the end of the year, in 2023, because it must go up for renewable. There's a chance that it'll either end, or go down to 20%. Don't wait around to claim this tax credit. Save yourself from getting price gouged by your Utility provider and claim your Tax Credit with Your Local Solar Experts.",
    image: "/_tmp/tax_return.jpg",
    tags: [
      { label: "Taxes", color: "blue" },
      { label: "Savings", color: "green" },
    ],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
  {
    id: "2",
    title: "Are Solar Panels Actually Worth It?",
    excerpt:
      "Are solar panels actually worth it? It's one of the most common questions I get, ahd the answer is a resounding YES! Not only are solar panels going to help you completely eliminate or massively offset your energy bill, but you'll build tens of thousands of dollars in equity in your home with your installation!",
    image: "/_tmp/scales.jpg",
    tags: [
      { label: "Investment", color: "green" },
      { label: "Equity", color: "green" },
    ],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
  {
    id: "3",
    title: "What are SRECs and How Can I Earn Them?",
    excerpt:
      "Have you heard of Solar Renewable Energy Credits? It's a really awesome benefit that comes with solar installations in certain states. One of the states that offers SRECs is Virginia! An SREC is sort of like an options contract, for your energy. You're allowed to sell the credit at any time, for cash, in a fluctuating market. Wait till the time is right, and reduce your solar bill by up to $100/year!",
    image: "/_tmp/chart_rising.jpg",
    tags: [{ label: "Investment", color: "green" }],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
  {
    id: "4",
    title: "Lock In Your 1-1 Net Meter Rate!",
    excerpt:
      "Unfortunately, some states like Hawai'i, California and Nevada have either eliminated Net Metering entirely, or drastically reduced the rate at which you get the energy you share with the grid back when you need it. Luckily in states like Virgnia, you can stil claim the 1-1 tier. Meaning in the summer when you produce electricity like crazy, you'll get credited back that energy when you need it, 1-1, in the winter!",
    image: "/_tmp/handshake.jpg",
    tags: [{ label: "Design", color: "yellow" }],
    publishedAt: "July 21, 2022",
    author: {
      name: "Austin Witherow",
      avatarUrl: "/_tmp/savant.png",
    },
  },
];

const testimonials = [
  {
    name: "Samual Wright",
    role: "Homeowner in Virginia",
    image: "https://i.pravatar.cc/150?img=60",
    text: "Austin did a great job explaining how the process works and made us feel super comfortable and excited about converting to solar and going green. So excited we chose Your Local Solar Experts.",
  },
  {
    name: "Oscar McClintoc",
    role: "Homeowner in Virginia",
    image: "https://i.pravatar.cc/150?img=52",
    text: "Your Local Solar Experts went above and beyond to make our system work. Austin was the best! Very knowledgeable, friendly and efficient. I have already referred multiple people and will continue to do so!",
  },
  {
    name: "Leighna Beieau",
    role: "Homeowner in Virginia",
    image: "https://i.pravatar.cc/150?img=16",
    text: "Austin explained things in a way that I could understand and even explain to my neighbors and friends who were also looking into solar. Highly recommend.",
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
  const { image, name, role, text } = props;
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
            color={mode("green.600", "green.400")}
            fontSize="xl"
          />
          <Text mt="3" fontSize="xl" fontWeight="bold" maxW="38rem">
            {text}
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
              color={mode("green.600", "green.400")}
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

  const headingLineHeightValue = useBreakpointValue({
    base: "1xl",
    lg: "69px",
  });

  const sectionHeaderSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <>
      <Box as="section" maxW={1280} margin="0 auto" px={4}>
        <Box
          as="nav"
          bg="bg-surface"
          boxShadow={mode("sm", "sm-dark")}
          py={{ base: "3", lg: "4" }}
        >
          <Flex justify="space-between" alignItems="center">
            <HStack spacing="4">
              <Logo src="/logo-large.png" />
              {/* {isDesktop && (
                  <ButtonGroup variant="ghost" spacing="1">
                    <Button>Home</Button>
                    <Button aria-current="page">Dashboard</Button>
                    <Button>Tasks</Button>
                    <Button>Bookmarks</Button>
                    <Button>Users</Button>
                  </ButtonGroup>
                )} */}
            </HStack>
            {isDesktop ? (
              <>
                <Button
                  colorScheme="green"
                  size="lg"
                  fontWeight="bold"
                  fontSize="md"
                >
                  Free Quote
                </Button>
                {/* <HStack spacing="4">
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
                  </HStack> */}
              </>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Box>
      </Box>
      <Box
        as="section"
        bg="gray.800"
        py="12"
        position="relative"
        h={{ base: "560px", md: "640px" }}
        bgImage="/solar_roof.jpg"
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
            <Heading
              size="2xl"
              fontWeight="extrabold"
              lineHeight={headingLineHeightValue}
            >
              Stop Renting. <br />
              Start Owning Your Energy.
            </Heading>
            <Text fontSize="lg" maxW={800} margin="16px auto">
              Yep, it's possible, and easy., and it's never been more affordable
              than RIGHT NOW TODAY, seriously. Let's get a free quote written up
              for you and set you up for for massive savings in solar.
            </Text>
            <LightMode>
              <Button
                colorScheme="green"
                size="lg"
                mt="6"
                fontWeight="bold"
                fontSize="md"
              >
                Get a Free Quote
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
                <Text>Average Energy Offset</Text>
                <Text fontSize="3xl">100%+</Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Happy Customers</Text>
                <Text fontSize="3xl">33,000+</Text>
              </Box>
              <Box textAlign="center" color="white">
                <Text>Limited Time Rebate</Text>
                <Text fontSize="3xl">6 Month</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box as="section" bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={sectionHeaderSize}>Our Mission</Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                Every family needs Affordable, Reliable, Self Sufficient Clean
                Energy with Solar.
              </Text>
            </Stack>
            <Stack
              spacing="3"
              direction={{ base: "column", sm: "row" }}
              justify="center"
            >
              <Button size="md" colorScheme="green">
                Get a Free Quote
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box
        bg="bg-surface"
        py={{ base: "16", md: "24" }}
        px={{ base: "4", md: "16", lg: "24" }}
      >
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
                Looking for Expert Installation?
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                You've come to the right place. With decades of experience,
                dedicated to bringing you the most Cutting-Edge yet Dependable,
                Tested Solar Installations. Everything is backed by a 25-year
                Bumper-to-Bumper Warranty and Fixed Monthly Prices that compete
                with Utility.
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column-reverse", md: "row" }}
              spacing="3"
            >
              <Button size="md" colorScheme="green">
                Get a Free Quote
              </Button>
            </Stack>
          </Stack>
          <Image
            width="full"
            height={{ base: "auto", md: "lg" }}
            objectFit="cover"
            src="/example.jpg"
          />
        </Stack>
      </Box>
      <Box bg="bg-surface" p={{ base: "4", md: "16", lg: "24" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "12", lg: "16" }}
        >
          <Image
            width="full"
            height={{ base: "auto", md: "lg" }}
            objectFit="cover"
            src="/kid_book_wow.jpg"
          />
          <Stack
            spacing={{ base: "8", md: "10" }}
            width="full"
            justify="center"
          >
            <Stack spacing={{ base: "4", md: "6" }}>
              <Heading size={useBreakpointValue({ base: "sm", md: "lg" })}>
                We're Not Just Installation Experts. We're Educators.
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                Stuck at a crossroad? We are here to field any questions that
                you might have about Solar and Clean Energy as you transition
                towards owning your energy, and no longer renting from Utility!
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column-reverse", md: "row" }}
              spacing="3"
            >
              <Button size="md" colorScheme="green">
                Get a Free Quote
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box as="section" bg={mode("gray.50", "gray.800")}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          p={{ base: "6", md: "8" }}
        >
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading size={sectionHeaderSize}>Testimonials</Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              Real Reviews from Homeowners Nationwide.
            </Text>
          </Stack>
          <SimpleGrid
            py="16"
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: "16", lg: "32" }}
          >
            {testimonials.map((testy) => (
              <Testimonial {...testy} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box bg="bg-surface" maxW={1280} margin="0 auto">
        <Box
          bg="bg-accent"
          color="on-accent"
          pt={{ base: "16", md: "24" }}
          pb={{ base: "32", md: "48" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} align="center">
            <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
              <Stack spacing="4">
                <Text
                  fontWeight="semibold"
                  color="green.500"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  The Truth About Energy Independence
                </Text>
                <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
                  Get the Latest News, Legislation and Savings
                </Heading>
              </Stack>
            </Stack>
            {/* <InputGroup size="lg" maxW={{ md: "sm" }}>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="on-accent" boxSize="5" />
                </InputLeftElement>
                <Input
                  placeholder="Search"
                  variant="filled"
                  colorScheme="green"
                />
              </InputGroup> */}
          </Stack>
        </Box>
        <Box pb={{ base: "16", md: "24" }} mt={{ base: "-16", md: "-24" }}>
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
        </Box>
      </Box>
      <Box as="section" bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={sectionHeaderSize}>Our Mission</Heading>
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
              <Button size="md" colorScheme="green">
                Get a Free Quote
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
