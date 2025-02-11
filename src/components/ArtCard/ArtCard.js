import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ArtCard.module.scss';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx';
const ArtCard = ({ art }) => {
    return (_jsxs("div", { className: styles.artCard, children: [_jsxs(Link, { to: `/art/${art.id}`, className: styles.link, children: [_jsx("img", { src: art.imageUrl, alt: art.title, className: styles.image }), _jsx("h3", { className: styles.title, children: art.title })] }), _jsx(FavoriteButton, { artId: art.id })] }));
};
export default ArtCard;
