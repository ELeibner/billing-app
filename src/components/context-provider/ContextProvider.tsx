import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { NotificationProvider } from './notification-provider/NotificationProvider';

export const ContextProvider: FC = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <NotificationProvider>
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale={'en'}
                >
                    {children}
                </LocalizationProvider>
            </NotificationProvider>
        </QueryClientProvider>
    );
};
