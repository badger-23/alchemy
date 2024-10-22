import { useState } from 'react';

export const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (byCount) =>
    setCurrentPage((prevPage) => prevPage + byCount);

  return {
    currentPage,
    handlePageChange,
  };
};
