/* Search bar for searching transactions */

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setHasContent(false);
    } else {
      setHasContent(true);
    }
  };

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

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);
      if (!inputRef.current) return;
      const searchInput = inputRef.current.value;
      params.set("search", searchInput);
      router.push(`?${params.toString()}`);
    };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        ref={inputRef}
        onChange={handleChange}
        name="search"
        type="text"
        className="border border-border bg-card rounded-l-lg mx-auto w-full px-6 py-3 font-light"
        placeholder="Search by title..."
      />
      {hasContent ? (
        <button
          onClick={handleReset}
          className="bg-muted w-15 border border-border cursor-pointer hover:bg-border"
        >
          <RxCross2 size={20} className="mx-auto" />
        </button>
      ) : null}
      <button
        type="submit"
        className="bg-muted min-w-20 border border-border rounded-r-lg cursor-pointer hover:bg-border transition-colors"
      >
        <IoIosSearch size={25} className="mx-auto" />
      </button>
    </form>
  );
};

export default SearchBar;
