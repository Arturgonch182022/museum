class FavoritesStorage {
    private storageKey: string;

    constructor(key: string = 'favorites') {
        this.storageKey = key;
    }

    getFavorites(): string[] {
        const favorites = sessionStorage.getItem(this.storageKey);
        return favorites ? JSON.parse(favorites) : [];
    }

    addFavorite(artId: string): void {
        const favorites = this.getFavorites();
        if (!favorites.includes(artId)) {
            favorites.push(artId);
            sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
        }
    }

    removeFavorite(artId: string): void {
        const favorites = this.getFavorites().filter((id) => id !== artId);
        sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }

    isFavorite(artId: string): boolean {
        return this.getFavorites().includes(artId);
    }
}

export default FavoritesStorage;
