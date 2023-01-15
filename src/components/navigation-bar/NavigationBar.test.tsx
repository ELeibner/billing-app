import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

jest.mock('./navigation-item/NavigationItem', () => ({
    NavigationItem: () => <div data-testid="navigation-item" />
}));

describe('NavigationBar component', () => {
    it('should display navigation items in the document', () => {
        render(<NavigationBar />);
        const items = screen.getAllByTestId('navigation-item');
        expect(items).toHaveLength(5);
    });
});
