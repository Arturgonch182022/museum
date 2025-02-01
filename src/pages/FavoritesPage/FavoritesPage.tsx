import React, { useState, useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import { fetchArtData } from "../../services/api.ts";
import { IArt } from "../../types";
import ArtCard from "../../components/ArtCard/ArtCard.tsx";
import FavoritesStorage from "./FavoritesStorage";

const favoritesStorage = new FavoritesStorage();

const FavoritesPage: React.FC = () => {
    const [favoriteArt, setFavoriteArt] = useState<IArt[]>([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const allArts = await fetchArtData();
            if (allArts) {
                const favorites = favoritesStorage.getFavorites();
                const filteredArt = allArts.filter(art => favorites.includes(art.id));
                setFavoriteArt(filteredArt);
            }
        };
        fetchFavorites();
    }, []);

    return (
      <main className={styles.favoritesPage}>
          <h2>Favorites</h2>
          {favoriteArt.length > 0 ? (
            <section className={styles.artGrid}>
                {favoriteArt.map((art) => (
                  <ArtCard key={art.id} art={art} />
                ))}
            </section>
          ) : (
            <p>No favorite art added.</p>
          )}
      </main>
    );
};

export default FavoritesPage;