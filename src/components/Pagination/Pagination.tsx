import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const renderPageNumbers = () => {
    const start = Math.max(currentPage - 2, 0);
    const end = Math.min(currentPage + 1, totalPages);
    return pageNumbers.slice(start, end).map(number => (
      <li
        key={number}
        className={`${styles.pageItem} ${number === currentPage ? styles.active : ''}`}
        onClick={() => onPageChange(number)}
        style={{ cursor: 'pointer' }}
      >
        {number}
      </li>
    ));
  };

  return (
    <ul className={styles.pagination}>
      {currentPage > 1 && (
        <li
          className={styles.pageItem}
          onClick={() => onPageChange(currentPage - 1)}
          style={{ cursor: 'pointer' }}
        >
          {'<'}
        </li>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <li
          className={styles.pageItem}
          onClick={() => onPageChange(currentPage + 1)}
          style={{ cursor: 'pointer' }}
        >
          {'>'}
        </li>
      )}
    </ul>
  );
};

export default Pagination;