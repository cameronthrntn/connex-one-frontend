import type { AppProps } from "next/app";
import { Theme, ThemeObject } from "../../types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { defaultTheme, light, dark } from "../../theme";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600"],
});

const GlobalStyle = createGlobalStyle<{ theme: ThemeObject }>`
  p {
    margin: 0;
    margin-bottom: 16px;
  }
  h1 {
    margin: 0;
    margin-bottom: 1em;
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
    font-family: ${inter.style.fontFamily};
    letter-spacing: 0.2ch;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    text-align: justify;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    white-space: nowrap;
  }
`;

type Themes = {
  [K in Theme]: ThemeObject;
};

export default function App({ Component, pageProps }: AppProps) {
  const themes: Themes = { light, dark };
  const theme = "light";

  console.log(themes[theme]);

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...themes[theme] }}>
      <StyledComponentsRegistry>
        <GlobalStyle theme={themes[theme]} />
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
}
