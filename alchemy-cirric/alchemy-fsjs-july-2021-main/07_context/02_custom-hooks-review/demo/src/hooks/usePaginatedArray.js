import { useEffect, useState } from 'react';

export const usePaginatedArray = (initialArray, itemsPerPage = 5) => {
  if (!initialArray?.length) throw new Error('An initial array is required');
  const [data] = useState(initialArray);
  const [contents, setContents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(Math.ceil(data.length / itemsPerPage));

  const handleDecrementPage = () => {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  };

  const handleIncrementPage = () => {
    if (currentPage < totalPages) setCurrentPage((page) => page + 1);
  };

  const handleGoToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage; // 3 - 1 = 2 * 5 = 10
    const endIndex = currentPage * itemsPerPage; // 3 * 5 = 15
    setContents(data.slice(startIndex, endIndex));
  }, [currentPage]);

  return {
    contents,
    currentPage,
    totalPages,
    handleDecrementPage,
    handleGoToPage,
    handleGoToFirstPage: () => handleGoToPage(1),
    handleGoToLastPage: () => handleGoToPage(totalPages),
    handleIncrementPage,
  };
};
