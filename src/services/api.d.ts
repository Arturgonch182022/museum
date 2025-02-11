import { IArt } from '../types';
export declare const fetchArtData: (limit?: number, offset?: number, searchTerm?: string) => Promise<IArt[] | null>;
export declare const fetchArtDetails: (id: string) => Promise<any | null>;
