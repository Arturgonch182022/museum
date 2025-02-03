import React from 'react';
import styles from './ArtCard.module.scss';
import { Link } from 'react-router-dom';
import { IArt } from '../../types';
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx';

interface ArtCardProps {
    art: IArt;
}

const ArtCard: React.FC<ArtCardProps> = ({ art }) => {
    return (
        <div className={styles.artCard}>
            <Link to={`/art/${art.id}`} className={styles.link}>
                <img
                    src={art.imageUrl}
                    alt={art.title}
                    className={styles.image}
                />
                <h3 className={styles.title}>{art.title}</h3>
            </Link>
            <FavoriteButton artId={art.id} />
        </div>
    );
};

export default ArtCard;
