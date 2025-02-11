class FavoritesStorage {
    constructor(key = 'favorites') {
        Object.defineProperty(this, "storageKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.storageKey = key;
    }
    getFavorites() {
        const favorites = sessionStorage.getItem(this.storageKey);
        return favorites ? JSON.parse(favorites) : [];
    }
    addFavorite(artId) {
        const favorites = this.getFavorites();
        if (!favorites.includes(artId)) {
            favorites.push(artId);
            sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
        }
    }
    removeFavorite(artId) {
        const favorites = this.getFavorites().filter((id) => id !== artId);
        sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
    isFavorite(artId) {
        return this.getFavorites().includes(artId);
    }
}
export default FavoritesStorage;
