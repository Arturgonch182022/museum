import React, { useState, useEffect, useCallback } from 'react';
import styles from './HomePage.module.scss';
import {fetchArtData} from "../../services/api.ts";
import SearchForm from "../../components/SearchForm/SearchForm.tsx";
import SortButton from "../../components/SortButton/SortButton.tsx";
import Loader from "../../components/Loader/Loader.tsx";
import ArtCard from "../../components/ArtCard/ArtCard.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import {IArt} from "../../types";
import { PAGE_SIZE } from '../../constants';

const HomePage: React.FC = () => {
    const [artData, setArtData] = useState<IArt[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(PAGE_SIZE);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState<'title' | 'date' | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchArtData();
                if (data) {
                    setArtData(data);
                }
            } catch (err: any) {
                setError(err.message || 'Failed to fetch art data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = useCallback((term: string) => {
        setSearchTerm(term);
        setCurrentPage(1);
    }, []);

    const handleSort = useCallback((criteria: 'title' | 'date') => {
        setSortCriteria(criteria);
        setCurrentPage(1);
    }, []);


    const filteredData = React.useMemo(() => {
        return artData.filter((art) =>
            art.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [artData, searchTerm]);

    const sortedData = React.useMemo(() => {
        let data = [...filteredData];
        if (sortCriteria === 'title') {
            data.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortCriteria === 'date') {
            data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        return data;
    }, [filteredData, sortCriteria]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);



    const paginate = useCallback((pageNumber: number) => {
        setCurrentPage(pageNumber);
    }, []);

    return (
        <div className={styles.homePage}>
            <div className={styles.contentWrapper}>
                <div className={styles.controlPanel}>
                    <SearchForm onSearch={handleSearch} />
                    <SortButton onSort={handleSort} sortCriteria={sortCriteria} />
                </div>

                {loading ? (
                    <Loader />
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <>
                        <div className={styles.artGrid}>
                            {currentItems.map((art) => (
                                <ArtCard key={art.id} art={art} />
                            ))}
                        </div>
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onPageChange={paginate}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default HomePage;
