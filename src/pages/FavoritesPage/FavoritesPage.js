import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import { fetchArtData } from '../../services/api.ts';
import ArtCard from '../../components/ArtCard/ArtCard.tsx';
import FavoritesStorage from './FavoritesStorage';
const favoritesStorage = new FavoritesStorage();
const FavoritesPage = () => {
    const [favoriteArt, setFavoriteArt] = useState([]);
    useEffect(() => {
        const fetchFavorites = async () => {
            const allArts = await fetchArtData();
            if (allArts) {
                const favorites = favoritesStorage.getFavorites();
                const filteredArt = allArts.filter((art) => favorites.includes(art.id));
                setFavoriteArt(filteredArt);
            }
        };
        fetchFavorites();
    }, []);
    return (_jsxs("main", { className: styles.favoritesPage, children: [_jsx("h2", { children: "Favorites" }), favoriteArt.length > 0 ? (_jsx("section", { className: styles.artGrid, children: favoriteArt.map((art) => (_jsx(ArtCard, { art: art }, art.id))) })) : (_jsx("p", { children: "No favorite art added." }))] }));
};
export default FavoritesPage;
