import { useState, useRef, useEffect, useCallback } from 'react';

const useCloseBurger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);


    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                isOpen &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
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


