import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    set => ({ theme: "light", setTheme: theme => set(() => ({ theme })) }),
    { name: "theme-storage" },
  ),
);
