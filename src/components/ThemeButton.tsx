/* 
Button for changing the theme 
Displays different icon based on current theme
*/

'use client'

import { useTheme } from "@/context/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

const ThemeButton = () => {
    // theme: current theme, setTheme: changes theme
    const {theme, setTheme} = useTheme()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        return setTheme(theme === 'light'? 'dark' : 'light')
    }

    return(
        <button className="cursor-pointer border border-border rounded-full w-8 h-8 flex items-center justify-center hover:bg-muted dark:bg-input/30 dark:hover:bg-input/50 transition-all active:translate-y-0.5" onClick={handleClick}>{
            theme === 'light' ? <LuMoon /> : <MdOutlineWbSunny />
        }</button>
    )
}

export default ThemeButton;