import React from 'react';
import { usePaginatedArray } from '../../hooks/usePaginatedArray';
import alpharray from '../../fixtures/alpharray.json';
import styles from './App.css';

export default function App() {
  const {
    contents,
    currentPage,
    totalPages,
    handleDecrementPage,
    handleGoToPage,
    handleGoToFirstPage,
    handleGoToLastPage,
    handleIncrementPage,
  } = usePaginatedArray(alpharray);

  const isOnFirstPage = currentPage <= 1;
  const isOnLastPage = currentPage >= totalPages;

  return (
    <>
      <button
        onClick={handleGoToFirstPage}
        disabled={isOnFirstPage}
        className={styles.pageButton}
      >
        <span className={styles.arrowIcon}>&laquo;</span>
      </button>
      <button
        onClick={handleDecrementPage}
        disabled={isOnFirstPage}
        className={styles.pageButton}
      >
        <span className={styles.arrowIcon}>&lsaquo;</span>
      </button>

      <span>
        <input
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={({ target }) => handleGoToPage(target.value)}
        />{' '}
        / {totalPages}
      </span>

      <button
        onClick={handleIncrementPage}
        disabled={isOnLastPage}
        className={styles.pageButton}
      >
        <span className={styles.arrowIcon}>&rsaquo;</span>
      </button>
      <button
        onClick={handleGoToLastPage}
        disabled={isOnLastPage}
        className={styles.pageButton}
      >
        <span className={styles.arrowIcon}>&raquo;</span>
      </button>

      <ul>
        {contents.map((letter) => (
          <li key={letter}>{letter}</li>
        ))}
      </ul>
    </>
  );
}
