import { Stack } from '@mui/material';
import { LoadingInvoice } from './LoadingInvoice';
import { LoadingStatistics } from './LoadingStatistics';

export const LoadingHome = () => {
    return (
        <Stack gap={8}>
            <LoadingStatistics />
            <LoadingInvoice />
        </Stack>
    );
};
