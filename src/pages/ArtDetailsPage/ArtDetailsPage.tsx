import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArtDetailsPage.module.scss';
import {fetchArtDetails} from "../../services/api.ts";
import Loader from "../../components/Loader/Loader.tsx";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

const ArtDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [artDetails, setArtDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchArtDetails(id || '');
                if (data) {
                    setArtDetails(data);
                }
            } catch (err: any) {
                setError(err.message || 'Failed to fetch art details');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    if (!artDetails) {
        return <p>Art details not found.</p>;
    }
    return (
        <div className={styles.artDetailsPage}>
            <div className={styles.detailsContainer}>
                <h2 className={styles.title}>{artDetails.title}</h2>
                <img src={artDetails.image_id ? `https://www.artic.edu/iiif/2/${artDetails.image_id}/full/843,/0/default.jpg` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={artDetails.title} className={styles.image} />
                <div className={styles.info}>
                    <p><strong>Artist:</strong> {artDetails.artist_title}</p>
                    <p><strong>Date:</strong> {artDetails.date_start}</p>
                    <p><strong>Place of Origin:</strong> {artDetails.place_of_origin}</p>
                    <p><strong>Medium:</strong> {artDetails.medium_display}</p>
                </div>
                <FavoriteButton artId={String(artDetails.id)} />
            </div>
        </div>
    );
};

export default ArtDetailsPage;
