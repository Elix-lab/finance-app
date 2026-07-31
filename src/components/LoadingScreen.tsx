import { Spinner } from "./ui/shadCn/spinner";
import Logo from "./ui/Logo";
import { ImSpinner8 } from "react-icons/im";

const LoadingScreen = () => {
  return (
    <div className="min-h-dvh w-full flex flex-col items-center justify-center px-6 py-12 bg-radial from-card to-accent dark:from-accent dark:to-background animate-pulse">
        <img src="Logo.svg" className="size-20" />
        <p className="text-base">Loading...</p>
    </div>
  );
}

export default LoadingScreen;
