import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Loader.module.scss';
const Loader = () => {
    return (_jsxs("div", { className: styles.loader, children: [_jsx("div", { className: styles.spinner }), "Loading..."] }));
};
export default Loader;
