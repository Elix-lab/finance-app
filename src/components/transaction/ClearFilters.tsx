"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/shadCn/button";

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
  return <Button onClick={handleClick} className="text-xs font-light cursor-pointer" variant={"ghost"}>Clear filters</Button>;
};

export default ClearFilters;
