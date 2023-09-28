import React, { FC } from "react";

interface PaginationProps {
  page?: number | null;
  perPage?: number | null;
  setPagination: (pagination: { page?: number; perPage?: number }) => void;
}

const Pagination: FC<PaginationProps> = ({ page, perPage, setPagination }) => {
  if (!page || !perPage) return null;

  const handlePageChange = (newPage: number) => {
    setPagination({ page: newPage });
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-slate-500"
      >
        Previous
      </button>
      <span className="text-white">Page {page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-slate-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
