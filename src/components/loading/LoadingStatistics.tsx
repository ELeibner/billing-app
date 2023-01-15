import { Skeleton, Stack } from '@mui/material';

export const LoadingStatistics = ({ items = 1 }: { items?: number }) => {
    return (
        <Stack gap={2} width="90vw">
            {Array(items)
                .fill('')
                .map((_value, i) => (
                    <Skeleton
                        variant="rounded"
                        height={128}
                        animation="pulse"
                        key={i}
                    />
                ))}
        </Stack>
    );
};
