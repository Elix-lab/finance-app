import { FaPlus, FaMinus } from "react-icons/fa6";
import Link from "next/link";

const TransactionTableHeader = ({
  title,
  currentPage,
  hasNextPage,
}: {
  title: string;
  currentPage: number;
  hasNextPage: boolean;
}) => {

  return (
    <div className="flex justify-between border-b border-border pb-4">
      {/* Title */}
      <span className="text-base font-semibold">{title}</span>

      {/* Pagination */}
      <div className="flex items-center">
        <Link
          href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
          aria-disabled={currentPage <= 1}
          className="border border-border flex items-center justify-center rounded-sm text-xs p-1 cursor-pointer"
        >
          <FaMinus />
        </Link>
        <p className="min-w-7 text-center text-sm text-muted-foreground px-1">
          {currentPage}
        </p>
        <Link
        href={hasNextPage ? `?page=${currentPage + 1}` : "#"}
          aria-disabled={!hasNextPage}
          className="border border-border flex items-center justify-center rounded-sm text-xs p-1 cursor-pointer"
        >
          <FaPlus />
        </Link>
      </div>
    </div>
  );
};

export default TransactionTableHeader;
