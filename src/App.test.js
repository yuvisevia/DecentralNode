// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecentralNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecentralNode/i);
    expect(titleElement).toBeInTheDocument();
});
