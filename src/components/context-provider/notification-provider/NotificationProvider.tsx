import CheckIcon from '@mui/icons-material/Check';
import { Backdrop, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import { createContext, FC, useState } from 'react';

export const NotificationContext = createContext({
    showSuccess: () => {}
});

export const NotificationProvider: FC = ({ children }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setTimeout(() => setOpen(false), 2000);
    };

    return (
        <NotificationContext.Provider value={{ showSuccess: handleOpen }}>
            {children}
            <Backdrop
                sx={{
                    color: green[500],
                    zIndex: (theme: any) => theme.zIndex.drawer + 100
                }}
                open={open}
            >
                <Fab aria-label="save" color="success" size={'large'}>
                    <CheckIcon fontSize="large" />
                </Fab>
            </Backdrop>
        </NotificationContext.Provider>
    );
};
