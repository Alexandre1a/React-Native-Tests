import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "react-native";

type ColorTheme = "light" | "dark";

interface ThemeContextProps {
  theme: ColorTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

const THEME_KEY = "@app_theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<ColorTheme>("light");

  // Au premier rendu, on charge le thème sauvegardé
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      } else {
        // sinon on suit le système
        setTheme((systemScheme === "dark" ? "dark" : "light") as ColorTheme);
      }
    })();
  }, [systemScheme]);

  const toggleTheme = async () => {
    const next: ColorTheme = theme === "light" ? "dark" : "light";
    setTheme(next);
    await AsyncStorage.setItem(THEME_KEY, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
