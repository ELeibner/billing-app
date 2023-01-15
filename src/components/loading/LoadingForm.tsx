import { Button, Skeleton, Stack } from '@mui/material';

export const LoadingForm = () => {
    return (
        <Stack gap={2}>
            <Skeleton variant="rounded" height={256} animation="pulse" />
            <Skeleton variant="rounded" height={48} animation="pulse" />
            <Skeleton variant="rounded" height={48} animation="pulse" />
            <Button type="submit" variant="contained" disabled={true}>
                Submit
            </Button>
        </Stack>
    );
};
