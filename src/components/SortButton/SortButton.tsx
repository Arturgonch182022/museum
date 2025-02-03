import React from 'react';
import styles from './SortButton.module.scss';

interface SortButtonProps {
    onSort: (criteria: 'title' | 'date') => void;
    sortCriteria: 'title' | 'date' | null;
}

const SortButton: React.FC<SortButtonProps> = ({ onSort, sortCriteria }) => {
    return (
        <div className={styles.sortButton}>
            <button
                onClick={() => onSort('title')}
                className={`${styles.button} ${sortCriteria === 'title' ? styles.active : ''}`}
            >
                Sort by title
            </button>
            <button
                onClick={() => onSort('date')}
                className={`${styles.button} ${sortCriteria === 'date' ? styles.active : ''}`}
            >
                Sort by date
            </button>
        </div>
    );
};

export default SortButton;
