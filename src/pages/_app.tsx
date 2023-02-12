import type { AppProps } from "next/app";
import { PropsWithChildren, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";
import useWindowSize from "src/hooks/useWindowSize";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

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
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`;
