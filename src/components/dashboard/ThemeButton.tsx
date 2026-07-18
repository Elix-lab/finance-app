'use client'

import { useTheme } from "@/contexts/ThemeContext";

function ThemeButton () {
    const {theme, setTheme} = useTheme()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        return setTheme(theme === 'light'? 'dark' : 'light')
    }

    return(
        <button className="cursor-pointer border p-1" onClick={handleClick}>Change theme</button>
    )
}

export default ThemeButton;