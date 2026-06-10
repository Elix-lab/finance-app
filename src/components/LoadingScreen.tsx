import { Spinner } from "./ui/spinner";

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-8 shadow-sm shadow-gray-300 w-sm sm:w-lg max-w-lg h-96 max-h-96">
      <img src="/CashWell.png" alt="CashWell logo" className="w-30 sm:w-40" />
      <div className="flex items-center gap-2">
        <p className="text-base">Loading</p>
        <Spinner />
      </div>
    </div>
  );
}

export default LoadingScreen;
