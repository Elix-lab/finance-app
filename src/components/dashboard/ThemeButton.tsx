'use client'

import { useTheme } from "@/contexts/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

function ThemeButton () {
    const {theme, setTheme} = useTheme()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        return setTheme(theme === 'light'? 'dark' : 'light')
    }

    return(
        <button className="cursor-pointer border rounded-full w-8 h-8 flex items-center justify-center" onClick={handleClick}>{
            theme === 'light' ? <LuMoon className=""/> : <MdOutlineWbSunny />
        }</button>
    )
}

export default ThemeButton;