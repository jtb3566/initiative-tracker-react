import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {

    it('renders my name', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(/Created By: James Ballard/i))
    }),

    it('renders my github', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(/GitHub: jtb3566/i))
    }),

    it('renders api link', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(/dnd5eapi.co/i))
    })
})