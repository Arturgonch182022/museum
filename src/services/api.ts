import {IArt} from "../types";

const API_URL = 'https://api.artic.edu/api/v1/artworks';
//const API_URL = 'https://api.artic.edu/api/v1/artworks?limit=15&page=1';

export const fetchArtData = async (): Promise<IArt[] | null> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const transformedData = data.data.map((item: any) => ({
            id: String(item.id),
            title: item.title,
            imageUrl: item.image_id ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
            date: item.date_start
        }));
        return transformedData;
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
