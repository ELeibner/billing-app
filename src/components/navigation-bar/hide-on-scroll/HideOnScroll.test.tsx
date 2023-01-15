import { render, screen } from '@testing-library/react';
import { HideOnScroll } from './HideOnScroll';

describe('HideOnScroll component', () => {
    it('should render subcomponent', () => {
        render(
            <HideOnScroll direction="up">
                <div data-testid="subcomponent"></div>
            </HideOnScroll>
        );
        const subcomponent = screen.getByTestId('subcomponent');
        expect(subcomponent).toBeInTheDocument();
    });
});
