declare const useCloseBurger: () => {
    isOpen: boolean;
    toggleMenu: () => void;
    menuRef: import("react").RefObject<HTMLDivElement>;
    buttonRef: import("react").RefObject<HTMLButtonElement>;
};
export default useCloseBurger;
