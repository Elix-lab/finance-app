import { createContext, SetStateAction, useContext, useState, Dispatch } from "react";

// Future type of the context
interface ThemeContext {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}

// Creating theme context
const ThemeContext = createContext<ThemeContext | null>(null)

// Provider
export function ThemeProvider ({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState('light')

    const value={theme, setTheme}

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// Custom context hook
export function useTheme () {
    const context = useContext(ThemeContext)

    if(!context) throw new Error('You must use useTheme within the ThemeProvider')

    return context
}