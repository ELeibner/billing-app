import { render, screen } from '@testing-library/react';
import { Header } from './Header';

/* const mockedUseLocation = jest.fn(); */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: '/invoices' })
}));

describe('Header component', () => {
    it('should render component', () => {
        render(<Header />);
        const items = screen.getByTestId('navigation-header');
        expect(items).toBeInTheDocument();
    });
});
