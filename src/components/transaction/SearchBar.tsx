/* 
Search bar for searching transactions 
It searches for each teram introduce 
*/

"use client";

import { useSearchParams } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasContent, setHasContent] = useState(false);

  // Handle changes when input has content
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setHasContent(false);
    } else {
      setHasContent(true);
    }
  };

  // Resets the input to default
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    const params = new URLSearchParams(searchParams);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setHasContent(false);
    if (!params.has("search")) {
      return;
    }
    params.delete("search");
    router.push(`?${params.toString()}`);
  };

  // Handles the form submit
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (!inputRef.current) return;
    const searchInput = inputRef.current.value;
    params.set("search", searchInput);
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center h-12 px-4 border border-border rounded-xl font-light bg-card focus-within:border-primary">
      {/* Search bar */}
      <input
        ref={inputRef}
        onChange={handleChange}
        name="search"
        type="text"
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        placeholder="Search by title..."
      />
      {hasContent ? (
        // Reset button
        <button
          type="reset"
          onClick={handleReset}
          className="rounded-full p-1 text-xs text-muted-foreground cursor-pointer mr-1 hover:bg-muted"
        >
          <RxCross2 size={16} className="mx-auto" />
        </button>
      ) : null}
      {/* Search button */}
      <button
        type="submit"
        className="rounded-lg bg-muted px-2 py-1 text-xs text-muted-foreground cursor-pointer hover:bg-border"
      >
        <IoIosSearch size={20} className="mx-auto" />
      </button>
    </form>
  );
};

export default SearchBar;
