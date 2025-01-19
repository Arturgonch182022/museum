import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <ul className={styles.pagination}>
            {pageNumbers.map(number => (
                <li
                    key={number}
                    className={`${styles.pageItem} ${number === currentPage ? styles.active : ''}`}
                    onClick={() => onPageChange(number)}
                    style={{ cursor: 'pointer' }}
                >
                    {number}
                </li>
            ))}
        </ul>
    );
};

export default Pagination;