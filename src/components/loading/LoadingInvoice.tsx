import { Skeleton, Stack } from '@mui/material';

export const LoadingInvoice = ({ items = 3 }: { items?: number }) => {
    return (
        <Stack gap={2} width="90vw">
            {Array(items)
                .fill('')
                .map((_value, i) => (
                    <Skeleton
                        variant="rounded"
                        height={48}
                        animation="pulse"
                        key={i}
                    />
                ))}
        </Stack>
    );
};
