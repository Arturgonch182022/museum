import { jsx as _jsx } from "react/jsx-runtime";
// Greeting.test.tsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
test('renders greeting message with name', () => {
    const name = 'John';
    render(_jsx(Greeting, { name: name }));
    const greetingElement = screen.getByText(`Hello, ${name}!`);
    expect(greetingElement).toBeInTheDocument();
});
