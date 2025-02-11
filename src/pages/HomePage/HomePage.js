import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useCallback } from 'react';
import styles from './HomePage.module.scss';
import { fetchArtData } from '../../services/api';
import SearchForm from '../../components/SearchForm/SearchForm.tsx';
import SortButton from '../../components/SortButton/SortButton.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import ArtCard from '../../components/ArtCard/ArtCard.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import { PAGE_SIZE } from '../../constants';
const HomePage = () => {
    const [artData, setArtData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(PAGE_SIZE);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState(null);
    const [totalLoaded, setTotalLoaded] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchArtData();
                if (data) {
                    setArtData(data);
                    setTotalLoaded(data.length);
                }
            }
            catch (err) {
                setError(err.message || 'Failed to fetch art data');
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    const loadMoreData = useCallback(async () => {
        const totalPages = Math.ceil(totalLoaded / itemsPerPage);
        if (currentPage === totalPages && totalLoaded > 0) {
            const offset = totalLoaded;
            setLoading(true);
            try {
                const newData = await fetchArtData(itemsPerPage, offset);
                if (newData) {
                    setArtData((prevData) => [...prevData, ...newData]);
                    setTotalLoaded((prev) => prev + newData.length);
                }
            }
            catch (err) {
                setError(err.message || 'Failed to fetch more art data');
            }
            finally {
                setLoading(false);
            }
        }
    }, [currentPage, totalLoaded, itemsPerPage]);
    useEffect(() => {
        loadMoreData();
    }, [currentPage, loadMoreData]);
    const handleSearch = useCallback(async (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
        setLoading(true);
        setError(null);
        try {
            const data = await fetchArtData(itemsPerPage, 0, term);
            if (data) {
                setArtData(data);
                setTotalLoaded(data.length);
            }
        }
        catch (err) {
            setError(err.message || 'Failed to search art data');
        }
        finally {
            setLoading(false);
        }
    }, [itemsPerPage]);
    const handleSort = useCallback((criteria) => {
        setSortCriteria(criteria);
        setCurrentPage(1);
    }, []);
    const filteredData = React.useMemo(() => {
        return artData.filter((art) => art.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [artData, searchTerm]);
    const sortedData = React.useMemo(() => {
        let data = [...filteredData];
        if (sortCriteria === 'title') {
            data.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (sortCriteria === 'date') {
            data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        return data;
    }, [filteredData, sortCriteria]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(totalLoaded / itemsPerPage);
    const paginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
    }, []);
    return (_jsxs("main", { className: styles.homePage, children: [_jsxs("header", { className: styles.controlPanel, children: [_jsx("div", { className: styles.searchForm, children: _jsx(SearchForm, { onSearch: handleSearch }) }), _jsx(SortButton, { onSort: handleSort, sortCriteria: sortCriteria })] }), loading ? (_jsx(Loader, {})) : error ? (_jsxs("p", { children: ["Error: ", error] })) : (_jsxs(_Fragment, { children: [_jsx("section", { className: styles.artGrid, children: currentItems.map((art) => (_jsx(ArtCard, { art: art }, art.id))) }), _jsx(Pagination, { totalPages: totalPages, currentPage: currentPage, onPageChange: paginate })] }))] }));
};
export default HomePage;
