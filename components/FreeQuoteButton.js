import NextLink from "next/link";
import { Button, useBreakpointValue } from "@chakra-ui/react";

export const FreeQuoteButton = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <NextLink href="/get-a-custom-solar-quote-for-your-proprety" passHref>
      <Button
        colorScheme="green"
        size={isDesktop ? "md" : "sm"}
        fontWeight="bold"
        fontSize="md"
      >
        {isDesktop ? "Get a Free Quote" : "Free Quote"}
      </Button>
    </NextLink>
  );
};
