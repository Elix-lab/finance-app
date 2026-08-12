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
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

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
          <button
            onClick={() => handleClick("prev")}
            className={clsx(
              "border border-border flex items-center justify-center rounded-sm text-xs p-1 ",
              currentPage <= 1
                ? "cursor-default text-muted-foreground"
                : "cursor-pointer",
            )}
            disabled={currentPage <= 1}
          >
            <FaMinus />
          </button>
          {/* </Link> */}
          <p className="min-w-7 text-center text-sm text-muted-foreground px-1">
            {currentPage}
          </p>
          <button
            onClick={() => handleClick("next")}
            className={clsx(
              "border border-border flex items-center justify-center rounded-sm text-xs p-1",
              !hasNextPage
                ? "cursor-default text-muted-foreground"
                : "cursor-pointer",
            )}
            disabled={!hasNextPage}
          >
            <FaPlus />
          </button>
          {/* </Link> */}
        </div>
      ) : null}
    </div>
  );
};

export default TransactionTableHeader;
