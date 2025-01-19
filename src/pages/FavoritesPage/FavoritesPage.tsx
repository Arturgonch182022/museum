import React, { useState, useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import {fetchArtData} from "../../services/api.ts";
import {IArt} from "../../types";
import ArtCard from "../../components/ArtCard/ArtCard.tsx";

const FavoritesPage: React.FC = () => {
    const [favoriteArt, setFavoriteArt] = useState<IArt[]>([]);

    useEffect(() => {
        const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]') as string[];
        const fetchFavorites = async () => {
            const allArts = await fetchArtData()
            if(allArts){
                const filteredArt = allArts.filter(art => favorites.includes(art.id))
                setFavoriteArt(filteredArt);
            }
        };
        fetchFavorites();
    }, []);

    return (
        <div className={styles.favoritesPage}>
            <h2>Favorites</h2>
            {favoriteArt.length > 0 ? (
                <div className={styles.artGrid}>
                    {favoriteArt.map((art) => (
                        <ArtCard key={art.id} art={art} />
                    ))}
                </div>
            ) : (
                <p>No favorite art added.</p>
            )}
        </div>
    );
};

export default FavoritesPage;
