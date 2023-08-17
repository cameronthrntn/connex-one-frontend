export type Theme = "light" | "dark";

export interface ThemeObject {
  colors: {
    main: string;
    text: string;
    red: string;
  };
}

export interface ServerResponse {
  epoch?: number;
  metrics?: string;
  message?: string;
}
