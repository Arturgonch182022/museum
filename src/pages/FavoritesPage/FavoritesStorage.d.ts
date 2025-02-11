declare class FavoritesStorage {
    private storageKey;
    constructor(key?: string);
    getFavorites(): string[];
    addFavorite(artId: string): void;
    removeFavorite(artId: string): void;
    isFavorite(artId: string): boolean;
}
export default FavoritesStorage;
