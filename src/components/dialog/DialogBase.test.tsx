import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DialogBase } from './DialogBase';

describe('DialogBase component', () => {
    it('should render items in the document', async () => {
        render(
            <DialogBase
                title="title"
                content="content"
                cancelLabel="cancel"
                confirmLabel="confirm"
            >
                <button data-testid="open-dialog-btn"></button>
            </DialogBase>
        );
        const btn = screen.getByTestId('open-dialog-btn');
        await userEvent.click(btn);
        let item = screen.getByTestId('dialog-title');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('dialog-content');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('dialog-cancel-btn');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('dialog-confirm-btn');
        expect(item).toBeInTheDocument();
    });
});
