import React from 'react';
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
