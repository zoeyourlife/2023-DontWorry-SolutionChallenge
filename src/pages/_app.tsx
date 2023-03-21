import { domMax, LazyMotion } from "framer-motion";
import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import useWindowSize from "src/hooks/useWindowSize";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DontWorry</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0 viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <LazyMotion features={domMax}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LazyMotion>
      </ThemeProvider>
    </>
  );
}

export default App;

export async function getinitialProps(context: NextPageContext) {
  const cookie = context.req ? context.req.headers.cookie : "";
  return {
    props: { cookie },
  };
}

let vh = 0;

function Layout({ children }: PropsWithChildren<{}>) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  min-height: calc(var(--var, 1vh) * 100);
  max-width: 480px;
  width: 100vw;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background};
`;
