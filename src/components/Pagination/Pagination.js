import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Pagination.module.scss';
const Pagination = ({ totalPages, currentPage, onPageChange, }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const renderPageNumbers = () => {
        const start = Math.max(currentPage - 2, 0);
        const end = Math.min(currentPage + 1, totalPages);
        return pageNumbers.slice(start, end).map((number) => (_jsx("li", { className: `${styles.pageItem} ${number === currentPage ? styles.active : ''}`, onClick: () => onPageChange(number), style: { cursor: 'pointer' }, children: number }, number)));
    };
    return (_jsxs("ul", { className: styles.pagination, children: [currentPage > 1 && (_jsx("li", { className: styles.pageItem, onClick: () => onPageChange(currentPage - 1), style: { cursor: 'pointer' }, children: '<' })), renderPageNumbers(), currentPage < totalPages && (_jsx("li", { className: styles.pageItem, onClick: () => onPageChange(currentPage + 1), style: { cursor: 'pointer' }, children: '>' }))] }));
};
export default Pagination;
