type Theme = "light" | "dark";

interface ThemeObject {
  colors: {
    main: string;
    text: string;
    red: string;
  };
}

interface ServerResponse {
  epoch?: number;
  metrics?: string;
  message?: string;
}
