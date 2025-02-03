import React, { useState, useEffect } from 'react';
import styles from './FavoriteButton.module.scss';
import FavoritesStorage from '../../pages/FavoritesPage/FavoritesStorage';

interface FavoriteButtonProps {
    artId: string;
}

const favoritesStorage = new FavoritesStorage();

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artId }) => {
    const [isFavorite, setIsFavorite] = useState(
        favoritesStorage.isFavorite(artId)
    );

    useEffect(() => {
        setIsFavorite(favoritesStorage.isFavorite(artId));
    }, [artId]);

    const toggleFavorite = () => {
        if (isFavorite) {
            favoritesStorage.removeFavorite(artId);
        } else {
            favoritesStorage.addFavorite(artId);
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <button
            className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
            onClick={toggleFavorite}
        >
            {isFavorite ? '❤️' : '🤍'}
        </button>
    );
};

export default FavoriteButton;
