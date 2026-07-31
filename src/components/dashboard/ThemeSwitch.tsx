import { Switch } from "../ui/switch";
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitch = () => {
  const { theme } = useTheme();

  return (
    <>
      <Switch checked={theme === 'dark'}/>
    </>
  );
}

export default ThemeSwitch;
