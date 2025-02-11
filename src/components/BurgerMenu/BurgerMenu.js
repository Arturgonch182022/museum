import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import useCloseBurger from '../../hooks/useCloseBurger/useCloseBurger.ts';
const BurgerMenu = () => {
    const { isOpen, toggleMenu, menuRef, buttonRef } = useCloseBurger();
    return (_jsx("div", { className: styles.burgerMenuContainer, children: _jsxs("nav", { className: styles.burgerMenu, children: [_jsxs("button", { ref: buttonRef, className: `${styles.burgerButton} ${isOpen ? styles.open : ''}`, onClick: toggleMenu, children: [_jsx("span", { className: styles.bar }), _jsx("span", { className: styles.bar }), _jsx("span", { className: styles.bar })] }), _jsx("div", { ref: menuRef, className: `${styles.menu} ${isOpen ? styles.open : ''}`, children: _jsxs("ul", { className: styles.navList, children: [_jsx("li", { children: _jsx(NavLink, { to: "/", onClick: toggleMenu, className: ({ isActive }) => isActive ? styles.active : undefined, children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/favorites", onClick: toggleMenu, className: ({ isActive }) => isActive ? styles.active : undefined, children: "Favorites" }) })] }) })] }) }));
};
export default BurgerMenu;
