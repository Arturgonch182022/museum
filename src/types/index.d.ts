export interface IArt {
    id: string;
    title: string;
    imageUrl: string;
    date: string;
}
export type FavoriteButtonProps = {
    art: IArt;
};
export type SearchFormProps = {
    handleSearch: (searchQuery: string) => void;
};
