import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
   render(<App />);
   const linkElement = screen.getByText(/James/i);
   expect(linkElement).toBeInTheDocument();
});

// TODO: Figure out how to test this
