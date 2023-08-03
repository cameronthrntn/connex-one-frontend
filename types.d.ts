import { Moment } from "moment";

type Theme = "light" | "dark";

interface ThemeObject {
  colors: {
    main: string;
    text: string;
    red: string;
  };
}
