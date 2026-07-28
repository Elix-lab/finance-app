"use client";

import {
  createContext,
  SetStateAction,
  useContext,
  useState,
  useEffect,
  Dispatch,
} from "react";

// Future type of the context
interface ThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

// Creating theme context
const ThemeContext = createContext<ThemeContext | null>(null);

// Provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')

  // Initial render theme adaptation
  // Using useEffect to avoid Hydration prblems due to possible conflict between the server and the client
  useEffect(() => {
    let stored = typeof window === 'undefined' ? 'light' : localStorage.getItem('theme')
    if(stored) setTheme(stored) 
  }, [])

  // Change theme
  // This doesn't trigger a re-render, it makes the browser recalculate the CSS
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme]);

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom context hook
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("You must use useTheme within the ThemeProvider");

  return context;
}
