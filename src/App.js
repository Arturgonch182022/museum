import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu/BurgerMenu.tsx';
import ArtDetailsPage from './pages/ArtDetailsPage/ArtDetailsPage.tsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import NotFound from './pages/NotFound/NotFound';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
const routes = [
    { path: '/', element: _jsx(HomePage, {}) },
    { path: '/art/:id', element: _jsx(ArtDetailsPage, {}) },
    { path: '/favorites', element: _jsx(FavoritesPage, {}) },
    { path: '*', element: _jsx(NotFound, {}) },
];
function App() {
    return (_jsxs(BrowserRouter, { basename: import.meta.env.BASE_URL, children: [_jsx(BurgerMenu, {}), _jsx(ErrorBoundary, { children: _jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: route.element }, route.path))) }) })] }));
}
export default App;
