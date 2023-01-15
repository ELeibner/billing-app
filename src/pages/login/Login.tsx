import EuroIcon from '@mui/icons-material/Euro';
import { Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { baseUrl } from '../../api/api';

import './Login.css';

export default function Login() {
    const handleClick = () => {
        window.open(`${baseUrl}/auth/google`, '_self');
    };

    return (
        <Stack data-testid="login-page">
            <Stack
                className="stack"
                direction="column"
                alignContent={'center'}
                justifyContent="center"
                spacing={2}
            >
                <EuroIcon sx={{ height: 64, width: 64, color: 'gray' }} />
                <Typography color="gray" variant="h6" data-testid="login-text">
                    Welcome to billing application!
                </Typography>
                <Button
                    variant="contained"
                    color="info"
                    onClick={handleClick}
                    data-testid="login-google"
                >
                    Continue With Google
                </Button>
            </Stack>
            <Typography
                sx={{
                    color: '#0000003d',
                    fontSize: '12px',
                    justifyContent: 'center',
                    display: 'flex'
                }}
            >
                {`version: ${process.env.REACT_APP_VERSION}`}
            </Typography>
        </Stack>
    );
}
