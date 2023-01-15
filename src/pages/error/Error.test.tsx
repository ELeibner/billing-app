import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error page', () => {
    it('should render components', () => {
        render(<Error />);
        let item = screen.getByTestId('error-text');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('error-refresh-btn');
        expect(item).toBeInTheDocument();
    });
});
