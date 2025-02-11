import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './FavoriteButton.module.scss';
import FavoritesStorage from '../../pages/FavoritesPage/FavoritesStorage';
const favoritesStorage = new FavoritesStorage();
const FavoriteButton = ({ artId }) => {
    const [isFavorite, setIsFavorite] = useState(favoritesStorage.isFavorite(artId));
    useEffect(() => {
        setIsFavorite(favoritesStorage.isFavorite(artId));
    }, [artId]);
    const toggleFavorite = () => {
        if (isFavorite) {
            favoritesStorage.removeFavorite(artId);
        }
        else {
            favoritesStorage.addFavorite(artId);
        }
        setIsFavorite(!isFavorite);
    };
    return (_jsx("button", { className: `${styles.favoriteButton} ${isFavorite ? styles.active : ''}`, onClick: toggleFavorite, children: isFavorite ? '❤️' : '🤍' }));
};
export default FavoriteButton;
