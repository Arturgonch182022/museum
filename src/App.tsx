import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.tsx';
import ArtDetailsPage from './pages/ArtDetailsPage/ArtDetailsPage.tsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import NotFound from './pages/NotFound/NotFound';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

interface RouteType {
    path: string;
    element: JSX.Element;
}

const routes: RouteType[] = [
    { path: '/', element: <HomePage /> },
    { path: '/art/:id', element: <ArtDetailsPage /> },
    { path: '/favorites', element: <FavoritesPage /> },
    { path: '*', element: <NotFound /> },
];

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <BurgerMenu />
            <ErrorBoundary>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
