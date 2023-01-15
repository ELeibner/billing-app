import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SendEmailDialog } from './SendEmailDialog';

jest.mock('./EmailForm', () => ({
    EmailForm: () => <div data-testid="dialog-email-form"></div>
}));

describe('SendEmailDialog component', () => {
    it('should render items in the document', async () => {
        render(
            <SendEmailDialog
                title="title"
                to="some@email.com"
                data={{ id: 1 } as any}
            />
        );
        const btn = screen.getByTestId('EmailIcon');
        await userEvent.click(btn);
        let item = screen.getByTestId('dialog');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('dialog-email-form');
        expect(item).toBeInTheDocument();
    });
});
