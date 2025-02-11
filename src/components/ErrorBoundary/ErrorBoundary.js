import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styles from './ErrorBoundary.module.scss';
class ErrorBoundary extends React.Component {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: { hasError: false }
        });
    }
    static getDerivedStateFromError(_) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Ошибка поймана:', error);
        console.error('Информация об ошибке:', errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("h1", { className: styles.errorBoundary, children: "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A." }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
