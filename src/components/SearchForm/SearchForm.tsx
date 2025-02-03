import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './SearchForm.module.scss';
import useDebounce from '../../hooks/useDebounce/useDebounce.ts';

interface SearchFormProps {
    onSearch: (term: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const validationSchema = Yup.object({
        searchTerm: Yup.string()
            .min(1, 'Search term must be at least 1 character')
            .max(50, 'Search term must be at most 50 characters')
            .required('Search term is required'),
    });

    const formik = useFormik({
        initialValues: {
            searchTerm: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            onSearch(values.searchTerm);
            resetForm();
        },
    });

    const debouncedSearch = useDebounce(formik.values.searchTerm, 500);

    React.useEffect(() => {
        onSearch(debouncedSearch);
    }, [debouncedSearch, onSearch]);

    return (
        <form onSubmit={formik.handleSubmit} className={styles.searchForm}>
            <input
                type="text"
                name="searchTerm"
                placeholder="Search by title"
                onChange={formik.handleChange}
                value={formik.values.searchTerm}
                className={styles.input}
            />
            {formik.touched.searchTerm && formik.errors.searchTerm && (
                <div className={styles.error}>{formik.errors.searchTerm}</div>
            )}
        </form>
    );
};

export default SearchForm;
