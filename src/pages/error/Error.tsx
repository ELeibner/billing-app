import { Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Error = () => {
    return (
        <Stack
            sx={{
                height: '100vh'
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
        >
            <Typography
                variant="subtitle1"
                color={'gray'}
                data-testid="error-text"
            >
                Something went wrong, please try again.
            </Typography>
            <Button
                variant="outlined"
                onClick={() => window.location.reload()}
                data-testid="error-refresh-btn"
            >
                Refresh page
            </Button>
        </Stack>
    );
};
