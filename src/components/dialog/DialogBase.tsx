import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createContext, useState } from 'react';

interface DialogProps {
    title: string;
    content: JSX.Element | string;
    cancelLabel?: string;
    confirmLabel?: string;
    onSubmit?: () => void;
    children: JSX.Element;
}

export const DialogContext = createContext({
    open: false,
    setOpen: (state: boolean) => state
});

export function DialogBase({
    title,
    content,
    cancelLabel,
    confirmLabel,
    children
}: DialogProps) {
    const [open, setOpen] = useState<boolean>(false);
    const handleClose = () => setOpen(false);

    return (
        <DialogContext.Provider value={{ open, setOpen: setOpen as any }}>
            <div onClick={() => setOpen(true)}>{children}</div>
            <Dialog open={open} onClose={handleClose} data-testid="dialog">
                <DialogTitle data-testid="dialog-title">{title}</DialogTitle>
                <DialogContent data-testid="dialog-content">
                    {content}
                </DialogContent>
                <DialogActions>
                    {cancelLabel && (
                        <Button
                            onClick={handleClose}
                            data-testid="dialog-cancel-btn"
                        >
                            {cancelLabel}
                        </Button>
                    )}
                    {confirmLabel && (
                        <Button
                            onClick={handleClose}
                            autoFocus
                            data-testid="dialog-confirm-btn"
                        >
                            {confirmLabel}
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </DialogContext.Provider>
    );
}
