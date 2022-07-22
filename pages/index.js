import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Img,
  LightMode,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import TawkTo from "tawkto-react";

import { VscCircleFilled } from "react-icons/vsc";
import { ImQuotesLeft } from "react-icons/im";

import { posts, testimonials } from "../data";

const Logo = ({ src }) => {
  const logoHeight = useBreakpointValue({ base: 50, md: 60 });
  return <Image height={`${logoHeight}px`} src={src} />;
};

export const BlogPost = ({ post, isHero, ...props }) => {
  const sectionHeaderSize = useBreakpointValue({
    base: "md",
    lg: "lg",
    xl: "xl",
  });

  return (
    <Link _hover={{ textDecor: "none" }} role="group">
      <Stack spacing="8" px={4}>
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
            <Heading size={sectionHeaderSize}>{post.title}</Heading>
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
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const tawk = new TawkTo("62d0e6c57b967b1179999dde", "1g800asr3");
      tawk.onStatusChange((status) =>
        console.log("tawk initiated, status: ", status)
      );
    }
  }, []);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const headingLineHeightValue = useBreakpointValue({
    base: "1xl",
    lg: "69px",
  });
  const sectionHeaderSize = useBreakpointValue({
    base: "md",
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
            <Button
              colorScheme="green"
              size={isDesktop ? "md" : "sm"}
              fontWeight="bold"
              fontSize="md"
            >
              {isDesktop ? "Get a Free Quote" : "Free Quote"}
            </Button>
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
      <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
        <Container>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={sectionHeaderSize}>Our Mission</Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                Every family needs Affordable, Reliable, Self Sufficient Clean
                Energy with Solar. It's our mission to provide the highest
                quality, yet most affordable installation. No money down, no
                hidden costs or fees, NO CATCHES. Get started with Solar Today.
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
              <Heading size={sectionHeaderSize}>
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
              <Heading size={sectionHeaderSize}>
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
              <Testimonial key={testy.id} {...testy} />
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
                <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                  There are things that you would otherwise NEVER FIND OUT from
                  your Utility company unless you look here. Why would a
                  monopoly be incentivized to tell you the truth. Free yourself,
                  your energy, and your life with the Truth.
                </Text>
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
      <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
        <Container>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={sectionHeaderSize} textAlign="center">
                Start Your Solar Journey
              </Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                The opportunity for Solar is Now. Get you Proposal and a
                Personalized Clean Energy Consultation Plan and join Thousands
                Getting Started with Solar and Secure Your Own Solar Power
                Plant, Today!
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
