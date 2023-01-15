import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactNode, useState } from 'react';

interface ConfirmDialogProps {
    title: string;
    content: string | ReactNode;
    cancelLabel?: string;
    confirmLabel?: string;
    onSubmit?: () => void;
    children: JSX.Element;
}

export function ConfirmDialog({
    title,
    content,
    cancelLabel = 'Cancel',
    confirmLabel = 'Confirm',
    children,
    onSubmit
}: ConfirmDialogProps) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleClickOpen}>{children}</div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle data-testid="confirm-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent data-testid="confirm-dialog-content">
                    {typeof content === 'string' ? (
                        <DialogContentText>{content}</DialogContentText>
                    ) : (
                        { content }
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        data-testid="confirm-dialog-cancel-btn"
                    >
                        {cancelLabel}
                    </Button>
                    <Button
                        onClick={() => {
                            handleClose();
                            onSubmit && onSubmit();
                        }}
                        autoFocus
                        data-testid="confirm-dialog-confirm-btn"
                    >
                        {confirmLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
