import { IArt } from '../types';
const API_URL = 'https://api.artic.edu/api/v1/artworks';

export const fetchArtData = async (limit: number = 15, offset: number = 0, searchTerm: string = ''): Promise<IArt[] | null> => {
    try {
        const url = new URL(API_URL);
        url.searchParams.append('limit', String(limit));
        url.searchParams.append('offset', String(offset));

        if (searchTerm) {
            url.searchParams.append('search', searchTerm);
        }

        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.map((item: any) => ({
            id: String(item.id),
            title: item.title,
            imageUrl: item.image_id ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
            date: item.date_start
        }));
    } catch (error) {
        console.error('Error fetching art data:', error);
        return null;
    }
};

export const fetchArtDetails = async (id: string): Promise<any | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch(error){
        console.error(`Error fetching art details with ID ${id}:`, error)
        return null
    }
}