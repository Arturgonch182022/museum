import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './SortButton.module.scss';
const SortButton = ({ onSort, sortCriteria }) => {
    return (_jsxs("div", { className: styles.sortButton, children: [_jsx("button", { onClick: () => onSort('title'), className: `${styles.button} ${sortCriteria === 'title' ? styles.active : ''}`, children: "Sort by title" }), _jsx("button", { onClick: () => onSort('date'), className: `${styles.button} ${sortCriteria === 'date' ? styles.active : ''}`, children: "Sort by date" })] }));
};
export default SortButton;
