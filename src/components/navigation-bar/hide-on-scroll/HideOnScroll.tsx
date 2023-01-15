import { Slide, useScrollTrigger } from '@mui/material';
import { ReactElement } from 'react';

export function HideOnScroll({
    window,
    children,
    direction
}: {
    window?: () => Window;
    children: ReactElement;
    direction: 'up' | 'down';
}) {
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });

    return (
        <Slide appear={false} direction={direction} in={!trigger}>
            {children}
        </Slide>
    );
}
