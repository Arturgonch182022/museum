import React from 'react';
interface SortButtonProps {
    onSort: (criteria: 'title' | 'date') => void;
    sortCriteria: 'title' | 'date' | null;
}
declare const SortButton: React.FC<SortButtonProps>;
export default SortButton;
