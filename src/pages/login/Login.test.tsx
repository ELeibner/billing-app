import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login page', () => {
    it('should render components', () => {
        render(<Login />);
        let item = screen.getByTestId('login-page');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('EuroIcon');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('login-text');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('login-google');
        expect(item).toBeInTheDocument();
    });
});
