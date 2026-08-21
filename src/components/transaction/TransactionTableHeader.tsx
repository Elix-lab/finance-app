/* 
Header for the TransactionTable.tsx
It show a title and conditionaly renders pagination buttons
Shows pagination buttons based on the optional currentPage. If this is undefined it doesn't show them
*/

"use client";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useSearchParams, useRouter } from "next/navigation";
import clsx from "clsx";

const TransactionTableHeader = ({
  title,
  currentPage,
  hasNextPage,
}: {
  title: string;
  currentPage?: number;
  hasNextPage?: boolean;
}) => {
  // Getting URL info
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  // Handler to change pagination. It applies changes to the URL
  const handleClick = (pageChange: "prev" | "next") => {
    if (!currentPage) return;
    const newPage = pageChange === "next" ? currentPage + 1 : currentPage - 1;
    params.set("page", String(newPage));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-between border-b border-border pb-4">
      {/* Title */}
      <span className="text-base font-semibold">{title}</span>
      {currentPage ? (
        // Pagination
        <div className="flex items-center">
          {/* Previous page button */}
          <button
            onClick={() => handleClick("prev")}
            className={clsx(
              "border border-border flex items-center justify-center rounded-full text-xs p-1",
              currentPage <= 1
                ? "cursor-default text-muted"
                : "cursor-pointer hover:bg-border",
            )}
            disabled={currentPage <= 1}
          >
            <FaMinus />
          </button>
          {/* Page number */}
          <p className="min-w-7 text-center text-sm text-muted-foreground px-1">
            {currentPage}
          </p>
          {/* Next page button */}
          <button
            onClick={() => handleClick("next")}
            className={clsx(
              "border border-border flex items-center justify-center rounded-full text-xs p-1",
              !hasNextPage
                ? "cursor-default text-muted"
                : "cursor-pointer hover:bg-border",
            )}
            disabled={!hasNextPage}
          >
            <FaPlus />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TransactionTableHeader;
