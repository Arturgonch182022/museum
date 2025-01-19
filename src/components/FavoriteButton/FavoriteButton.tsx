import React, { useState, useEffect } from 'react';
import styles from './FavoriteButton.module.scss';

interface FavoriteButtonProps {
    artId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]') as string[];
        setIsFavorite(favorites.includes(artId));
    }, [artId]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]') as string[];
        let updatedFavorites;
        if (isFavorite) {
            updatedFavorites = favorites.filter((id) => id !== artId);
        } else {
            updatedFavorites = [...favorites, artId];
        }
        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
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
