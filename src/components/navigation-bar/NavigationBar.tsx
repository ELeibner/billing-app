import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { HideOnScroll } from './hide-on-scroll/HideOnScroll';
import { navigationItems } from './navigation-item/navigation-items';
import { NavigationItem } from './navigation-item/NavigationItem';

export default function NavigationBar() {
    return (
        <HideOnScroll direction="up">
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0, background: '#34404ceb' }}
                data-testid="navigation-bar"
            >
                <Toolbar sx={{ justifyContent: 'space-evenly' }}>
                    {Object.values(navigationItems).map((props) => (
                        <NavigationItem
                            {...props}
                            key={props.title}
                            data-testid={props.title}
                        />
                    ))}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}
