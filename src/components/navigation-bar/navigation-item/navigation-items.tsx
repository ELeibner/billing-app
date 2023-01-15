import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import { ReactElement } from 'react';

export const navigationItems: {
    [k: string]: {
        title: string;
        path: string;
        icon: { outlined: ReactElement; filled: ReactElement };
    };
} = {
    home: {
        title: 'Home',
        path: '/',
        icon: {
            outlined: <HomeOutlinedIcon fontSize="large" />,
            filled: <HomeIcon fontSize="large" />
        }
    },
    invoices: {
        title: 'Invoices',
        path: '/invoices',
        icon: {
            outlined: <DescriptionOutlinedIcon fontSize="large" />,
            filled: <DescriptionIcon fontSize="large" />
        }
    },
    addInvoice: {
        title: 'Add',
        path: '/invoices/new',
        icon: {
            outlined: <AddCircleOutlinedIcon fontSize="large" />,
            filled: <AddCircleIcon fontSize="large" />
        }
    },
    statistics: {
        title: 'Statistics',
        path: '/statistics',
        icon: {
            outlined: <InsertChartOutlinedIcon fontSize="large" />,
            filled: <InsertChartIcon fontSize="large" />
        }
    },
    profile: {
        title: 'Profile',
        path: '/profile',
        icon: {
            outlined: <AccountCircleOutlinedIcon fontSize="large" />,
            filled: <AccountCircleIcon fontSize="large" />
        }
    }
};
