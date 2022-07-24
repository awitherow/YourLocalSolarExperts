import React, { useEffect } from "react";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  Image,
  useColorModeValue as mode,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { FreeQuoteButton } from "components/FreeQuoteButton";

import TawkTo from "tawkto-react";

export default function Layout({ children, showBottomPageCTA = true }) {
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

  const logoHeight = useBreakpointValue({ base: 50, md: 60 });

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
            <FreeQuoteButton responsive />
          </Flex>
        </Box>
      </Box>
      {children}
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
