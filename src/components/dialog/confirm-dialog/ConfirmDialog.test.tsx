import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmDialog } from './ConfirmDialog';

describe('ConfirmDialog component', () => {
    it('should render items in the document', async () => {
        render(
            <ConfirmDialog title="title" content="content">
                <button data-testid="open-dialog-btn"></button>
            </ConfirmDialog>
        );
        const btn = screen.getByTestId('open-dialog-btn');
        await userEvent.click(btn);
        let item = screen.getByTestId('confirm-dialog-title');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('confirm-dialog-content');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('confirm-dialog-cancel-btn');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('confirm-dialog-confirm-btn');
        expect(item).toBeInTheDocument();
    });
});
