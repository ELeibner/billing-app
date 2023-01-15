import { Link, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GraphList } from '../../components/graph-list/GraphList';
import { InvoiceList } from '../../components/invoice-list/InvoiceList';

function Home() {
    const navigate = useNavigate();
    return (
        <Stack direction="column" spacing={2} data-testid="home-page">
            <GraphList type={['income']} />
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography
                    id="recent-invoices"
                    variant="h6"
                    onClick={() => navigate('invoices')}
                    data-testid="home-recent-invoices"
                >
                    Recent invoices
                </Typography>
                <Link
                    variant="subtitle1"
                    sx={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        alignSelf: 'flex-end'
                    }}
                    onClick={() => navigate('invoices')}
                    data-testid="home-view-all-btn"
                >
                    View All
                </Link>
            </Stack>
            <InvoiceList limit={10} />
        </Stack>
    );
}

export default Home;
