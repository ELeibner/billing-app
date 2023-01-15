import { IconButton, Stack, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationItemProps {
    title: string;
    path: string;
    icon: { filled: ReactElement; outlined: ReactElement };
    dataTestId?: string;
}

export const NavigationItem: FC<NavigationItemProps> = ({
    title,
    path,
    icon,
    dataTestId
}) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;

    return (
        <IconButton
            color="inherit"
            onClick={() => navigate(path)}
            sx={{
                display: 'grid',
                fontSize: '12px',
                justifyItems: 'center'
            }}
            data-testid={dataTestId}
        >
            <Stack
                sx={{ color: isActive ? 'white' : 'gray' }}
                data-testid="navigation-item-icon"
            >
                {isActive ? icon.filled : icon.outlined}
            </Stack>
            <Typography
                variant="caption"
                fontWeight={isActive ? 600 : 400}
                component="div"
                data-testid="navigation-item-title"
            >
                {title}
            </Typography>
        </IconButton>
    );
};
