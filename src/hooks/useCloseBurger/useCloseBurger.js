import { useCallback, useEffect, useRef, useState } from 'react';
const useCloseBurger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                isOpen &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, isOpen, setIsOpen]);
    return { isOpen, toggleMenu, menuRef, buttonRef };
};
export default useCloseBurger;
