import { fetchArtData, fetchArtDetails } from './api.ts';
import { API_URL } from '../constants';
import fetchMock from 'jest-fetch-mock';

describe('Art API', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('fetchArtData returns art data successfully', async () => {
        const mockData = {
            data: [
                { id: 1, title: 'Art Piece 1', image_id: 'image1', date_start: '2021' },
                { id: 2, title: 'Art Piece 2', image_id: 'image2', date_start: '2022' },
            ],
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const result = await fetchArtData();

        expect(result).toEqual([
            {
                id: '1',
                title: 'Art Piece 1',
                imageUrl: 'https://www.artic.edu/iiif/2/image1/full/843,/0/default.jpg',
                date: '2021',
            },
            {
                id: '2',
                title: 'Art Piece 2',
                imageUrl: 'https://www.artic.edu/iiif/2/image2/full/843,/0/default.jpg',
                date: '2022',
            },
        ]);

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${API_URL}?limit=15&offset=0`);
    });

    test('fetchArtData handles errors', async () => {
        fetchMock.mockRejectOnce(new Error('Network error'));

        const result = await fetchArtData();

        expect(result).toBeNull();
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('fetchArtDetails returns art details successfully', async () => {
        const mockDetail = { id: '1', title: 'Art Piece 1', image_id: 'image1' };

        fetchMock.mockResponseOnce(JSON.stringify({ data: mockDetail }));

        const result = await fetchArtDetails('1');

        expect(result).toEqual(mockDetail);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${API_URL}/1`);
    });

    test('fetchArtDetails handles errors', async () => {
        fetchMock.mockRejectOnce(new Error('Network error'));

        const result = await fetchArtDetails('1');

        expect(result).toBeNull();
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});