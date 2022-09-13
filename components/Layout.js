import React, { useEffect } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

import { FreeQuoteButton } from "components/FreeQuoteButton";

import TawkTo from "tawkto-react";

const NAV_LINKS = [
  {
    href: "/articles",
    text: "Learn About Solar",
  },
];

const N_ENSURE_MAX = 9999;

export default function Layout({
  children,
  showBottomPageCTA = true,
  wrapperStyles,
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const tawk = new TawkTo("62d0e6c57b967b1179999dde", "1g800asr3");
      tawk.onStatusChange((status) =>
        console.log("tawk initiated, status: ", status)
      );
    }
  }, []);

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const sectionHeaderSize = useBreakpointValue({
    base: "md",
    lg: "lg",
    xl: "xl",
  });

  const logoHeight = useBreakpointValue({ base: 60 });

  return (
    <>
      <Box as="section" maxW={1280} margin="0 auto" px={4}>
        <Box as="nav" bg="bg-surface" py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between" alignItems="center">
            <HStack spacing="4">
              <NextLink href="/" passHref>
                <Box>
                  <Image
                    height={`${logoHeight}px`}
                    src="/logo-large.png"
                    alt="Your Local Solar Experts text with Solar Panels, a Sprout and the sun shining behind both."
                  />
                </Box>
              </NextLink>
            </HStack>
            {isDesktop ? (
              <>
                <Flex align="center" justify="space-around">
                  <FreeQuoteButton />
                  <Box ml={isDesktop ? 8 : 4}>
                    {NAV_LINKS.map(({ href, text }) => (
                      <NextLink href={href}>{text}</NextLink>
                    ))}
                  </Box>
                </Flex>
              </>
            ) : (
              <Menu zIndex={N_ENSURE_MAX}>
                <MenuButton
                  zIndex={N_ENSURE_MAX}
                  as={Button}
                  rightIcon={<GiHamburgerMenu />}
                >
                  Menu
                </MenuButton>
                <MenuList zIndex={N_ENSURE_MAX}>
                  <NextLink passHref href="/">
                    <MenuItem zIndex={N_ENSURE_MAX}>Home</MenuItem>
                  </NextLink>
                  <NextLink
                    passHref
                    href="/get-a-custom-solar-quote-for-your-proprety"
                  >
                    <MenuItem zIndex={N_ENSURE_MAX}>Get a Free Quote</MenuItem>
                  </NextLink>
                  <NextLink href="/articles" passHref>
                    <MenuItem zIndex={N_ENSURE_MAX}>Latest Solar News</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Box>
      </Box>
      <Box {...wrapperStyles}>{children}</Box>
      {showBottomPageCTA && (
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
                <FreeQuoteButton />
              </Stack>
            </Stack>
          </Container>
        </Box>
      )}
    </>
  );
}
