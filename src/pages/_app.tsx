import type { AppProps } from "next/app";
import { Theme, ThemeObject } from "../../types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { defaultTheme, light, dark } from "../../theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeObject }>`
  p {
    margin: 0;
    margin-bottom: 16px;
  }
  h1, h2, h3, h4, h5, h5, p {
    padding: 0;
    margin: 0;
  }
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.main};
    font-family: Inter;
    letter-spacing: 0.2ch;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    text-align: justify;
  }
`;

type Themes = {
  [K in Theme]: ThemeObject;
};

export default function App({ Component, pageProps }: AppProps) {
  const themes: Themes = { light, dark };
  const theme = "light";

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...themes[theme] }}>
      <StyledComponentsRegistry>
        <GlobalStyle theme={themes[theme]} />
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
}
