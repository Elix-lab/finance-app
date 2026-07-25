import { Switch } from "../ui/switch";
import { useTheme } from "@/contexts/ThemeContext";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Switch checked={theme === 'dark'}/>
    </>
  );
}

export default ThemeSwitch;
