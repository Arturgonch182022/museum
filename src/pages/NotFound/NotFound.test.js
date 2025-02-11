import { jsx as _jsx } from "react/jsx-runtime";
// NotFound.test.tsx
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
test('renders NotFound component with correct message', () => {
    render(_jsx(NotFound, {}));
    const titleElement = screen.getByText(/404 - Страница не найдена/i);
    const messageElement = screen.getByText(/Извините, но запрашиваемая страница не существует./i);
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
});
