"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ClearFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    if(params.size === 0) return
    const paramsArray = [...params.keys()]
    paramsArray.forEach(p => {
        params.delete(p)
    })
    router.push(`?${params.toString()}`)
};
  return <button onClick={handleClick}>Clear filters</button>;
};

export default ClearFilters;
