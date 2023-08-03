import type { AppProps } from "next/app";
import { Theme, ThemeObject } from "../../types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledComponentsRegistry from "@/lib/registry";
import { defaultTheme, light, dark } from "../../theme";
import { useThemeStore } from "@/services/store";

const GlobalStyle = createGlobalStyle<{ theme: ThemeObject }>`
  * {
    transition: 0.3s ease-in-out;
    transition-property: background, background-color
  }
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
  const { theme } = useThemeStore(state => state);

  return (
    <ThemeProvider theme={{ ...defaultTheme, ...themes[theme] }}>
      <StyledComponentsRegistry>
        <GlobalStyle theme={themes[theme]} />
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable={false}
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
}
