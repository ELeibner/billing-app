import { Skeleton, Stack } from '@mui/material';

export const LoadingProfile = () => {
    return (
        <Stack gap={2} alignItems="center">
            <Skeleton
                variant="circular"
                width={128}
                height={128}
                animation="pulse"
            />
            <Skeleton
                variant="rounded"
                width={128}
                height={32}
                animation="pulse"
            />
        </Stack>
    );
};
