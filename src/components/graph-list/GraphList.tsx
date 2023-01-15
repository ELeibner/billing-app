import { Stack } from '@mui/material';
import { useStatistics } from '../../hooks/useStatistics';
import { LoadingStatistics } from '../loading';
import { Graph, GraphType } from './graph/Graph';

const graphColors = ['#82ca9d', '#b3d0ea'];

interface GraphListProps {
    type: GraphType[];
}

export function GraphList({ type }: GraphListProps) {
    const { data, isLoading } = useStatistics();

    return (
        <>
            {isLoading ? (
                <LoadingStatistics />
            ) : (
                <Stack alignItems="center" data-testid="graph-list">
                    {!!data ? (
                        <Stack
                            direction={{ xs: 'column', sm: 'column' }}
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                            {type.map((item, i) => (
                                <Graph
                                    data={data}
                                    color={graphColors[i]}
                                    type={item}
                                    key={item}
                                />
                            ))}
                        </Stack>
                    ) : (
                        'No statistics'
                    )}
                </Stack>
            )}
        </>
    );
}
