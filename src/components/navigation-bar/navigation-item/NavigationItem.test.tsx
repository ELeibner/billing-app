import HomeIcon from '@mui/icons-material/Home';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => jest.fn()
}));

describe('NavigationItem component', () => {
    it('should display icon and title', () => {
        render(
            <Router>
                <NavigationItem
                    title="title"
                    path="/"
                    icon={{ filled: <HomeIcon />, outlined: <HomeIcon /> }}
                />
            </Router>
        );
        const icon = screen.getByTestId('navigation-item-icon');
        expect(icon).toBeInTheDocument();
        const title = screen.getByTestId('navigation-item-title');
        expect(title).toBeInTheDocument();
    });
});
