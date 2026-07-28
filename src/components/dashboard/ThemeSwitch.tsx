import { Switch } from "../ui/switch";
import { useTheme } from "@/context/ThemeContext";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Switch checked={theme === 'dark'}/>
    </>
  );
}

export default ThemeSwitch;
