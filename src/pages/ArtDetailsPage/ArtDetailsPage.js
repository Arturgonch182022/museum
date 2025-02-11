import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ArtDetailsPage.module.scss';
import { fetchArtDetails } from '../../services/api.ts';
import Loader from '../../components/Loader/Loader.tsx';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
const ArtDetailsPage = () => {
    const { id } = useParams();
    const [artDetails, setArtDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchArtDetails(id || '');
                if (data) {
                    setArtDetails(data);
                }
            }
            catch (err) {
                setError(err.message || 'Failed to fetch art details');
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    if (loading) {
        return _jsx(Loader, {});
    }
    if (error) {
        return _jsxs("p", { children: ["Error: ", error] });
    }
    if (!artDetails) {
        return _jsx("p", { children: "Art details not found." });
    }
    return (_jsx("main", { className: styles.artDetailsPage, children: _jsxs("section", { className: styles.detailsContainer, children: [_jsx("h2", { className: styles.title, children: artDetails.title }), _jsx("img", { src: artDetails.image_id
                        ? `https://www.artic.edu/iiif/2/${artDetails.image_id}/full/843,/0/default.jpg`
                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png', alt: artDetails.title, className: styles.image }), _jsxs("div", { className: styles.info, children: [_jsxs("p", { children: [_jsx("strong", { children: "Artist:" }), " ", artDetails.artist_title] }), _jsxs("p", { children: [_jsx("strong", { children: "Date:" }), " ", artDetails.date_start] }), _jsxs("p", { children: [_jsx("strong", { children: "Place of Origin:" }), ' ', artDetails.place_of_origin] }), _jsxs("p", { children: [_jsx("strong", { children: "Medium:" }), " ", artDetails.medium_display] })] }), _jsx(FavoriteButton, { artId: String(artDetails.id) })] }) }));
};
export default ArtDetailsPage;
