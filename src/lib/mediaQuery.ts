"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatch(media.matches);
    console.log(media.media)

    const handleChange = () => {
      setMatch(media.matches);
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };

  }, [query]);

  return match;
};
