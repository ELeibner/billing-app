import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { formatPath } from './utils/format-path';

export function Header() {
    const { pathname } = useLocation();

    return (
        <AppBar
            position="static"
            sx={{
                background: '#34404ceb'
            }}
            data-testid="navigation-header"
        >
            <Toolbar>
                <Typography color="white" variant="h6" component="div">
                    {formatPath(pathname) || 'Home'}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
