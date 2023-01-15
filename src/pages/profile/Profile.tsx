import { Avatar, Button, Stack, Typography } from '@mui/material';
import { baseUrl } from '../../api/api';
import { ConfirmDialog } from '../../components/dialog/confirm-dialog/ConfirmDialog';
import { LoadingProfile } from '../../components/loading';
import { useUserProfile } from '../../hooks/useUserProfile';

export default function Profile() {
    const { data: user, isLoading } = useUserProfile();

    const handleLogout = () => {
        window.open(`${baseUrl}/auth/logout`, '_self');
    };

    return (
        <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            data-testid="profile-page"
        >
            {isLoading ? (
                <LoadingProfile />
            ) : !!user ? (
                <>
                    <Avatar
                        src={user.photo}
                        sx={{ width: 128, height: 128, marginLeft: '4px' }}
                        data-testid="profile-avatar"
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        data-testid="profile-display-name"
                    >
                        {user.displayName}
                    </Typography>
                </>
            ) : (
                'No user'
            )}
            <ConfirmDialog
                title="Logout"
                content="Do you want to logout?"
                onSubmit={handleLogout}
            >
                <Button
                    variant="outlined"
                    color="error"
                    className="logout"
                    data-testid="profile-logout-btn"
                >
                    Logout
                </Button>
            </ConfirmDialog>
            <Stack>
                <Typography
                    sx={{
                        color: '#0000003d',
                        fontSize: '12px',
                        justifyContent: 'center'
                    }}
                >
                    {`${process.env.REACT_APP_NAME}, version: ${process.env.REACT_APP_VERSION}\n`}
                </Typography>
            </Stack>
        </Stack>
    );
}
