// Greeting.test.tsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting message with name', () => {
    const name = 'John';
    render(<Greeting name={name} />);

    const greetingElement = screen.getByText(`Hello, ${name}!`);
    expect(greetingElement).toBeInTheDocument();
});