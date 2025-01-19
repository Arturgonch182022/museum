import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BurgerMenu from "./components/BurgerMenu/BurgerMenu.tsx";
import ArtDetailsPage from "./pages/ArtDetailsPage/ArtDetailsPage.tsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

function App() {
    return (
        <BrowserRouter >
            <BurgerMenu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/art/:id" element={<ArtDetailsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
