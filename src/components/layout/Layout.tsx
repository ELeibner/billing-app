import { Container, CssBaseline, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '..';
import { useUserSignedIn } from '../../hooks/useUserSignedIn';

import NavigationBar from '../navigation-bar/NavigationBar';
import './Layout.css';

export default function Layout() {
    useUserSignedIn();

    return (
        <>
            <CssBaseline />
            <Stack>
                <Header />
            </Stack>
            <Container data-testid="container">
                <Stack>
                    <Stack>
                        <Container style={{ padding: '32px 8px 72px 8px' }}>
                            <Outlet />
                        </Container>
                    </Stack>
                </Stack>
            </Container>
            <Stack>
                <NavigationBar />
            </Stack>
        </>
    );
}
