import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";
import NProgress from "nprogress";

import { extendTheme } from "@chakra-ui/react";

import "nprogress.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
