import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BurgerMenu from "./components/BurgerMenu/BurgerMenu.tsx";
import ArtDetailsPage from "./pages/ArtDetailsPage/ArtDetailsPage.tsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

interface RouteType{
  path: string;
  element: JSX.Element;
}

const routes: RouteType[] = [
  { path: "/", element: <HomePage /> },
  { path: "/art/:id", element: <ArtDetailsPage /> },
  { path: "/favorites", element: <FavoritesPage /> },
];

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <BurgerMenu />
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
