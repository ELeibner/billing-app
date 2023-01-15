import { Stack } from '@mui/system';
import { GraphList } from '../../components/graph-list/GraphList';

function Statistics() {
    return (
        <Stack data-testid="statistics-page">
            <GraphList type={['income', 'invoices']} />
        </Stack>
    );
}

export default Statistics;
