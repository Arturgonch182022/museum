import React from 'react';
import styles from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import useCloseBurger from '../../hooks/useCloseBurger/useCloseBurger.ts';

const BurgerMenu: React.FC = () => {
    const { isOpen, toggleMenu, menuRef, buttonRef } = useCloseBurger();
    return (
        <div className={styles.burgerMenuContainer}>
            <nav className={styles.burgerMenu}>
                <button
                    ref={buttonRef}
                    className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                <div
                    ref={menuRef}
                    className={`${styles.menu} ${isOpen ? styles.open : ''}`}
                >
                    <ul className={styles.navList}>
                        <li>
                            <NavLink
                                to="/"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/favorites"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    isActive ? styles.active : undefined
                                }
                            >
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default BurgerMenu;
