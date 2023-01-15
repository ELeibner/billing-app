import { render, screen } from '@testing-library/react';
import Profile from './Profile';

jest.mock('../../hooks/useUserProfile', () => ({
    useUserProfile: () => ({
        data: { isSignedIn: true, displayName: 'name', photo: 'url' },
        isLoading: false
    })
}));

describe('Profile page', () => {
    it('should render components', () => {
        render(<Profile />);
        let item = screen.getByTestId('profile-page');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('profile-avatar');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('profile-display-name');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('profile-logout-btn');
        expect(item).toBeInTheDocument();
    });
});
