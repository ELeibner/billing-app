import { Stack } from '@mui/material';
import { FC } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import { generateArray } from '../utils/generate-array';

export type GraphType = 'income' | 'invoices';

interface GraphProps {
    data: any;
    type: GraphType;
    color: string;
}

export const Graph: FC<GraphProps> = ({ data, type, color }) => {
    const arr = generateArray(data, type);

    return (
        <Stack alignItems={'center'}>
            <BarChart width={window.innerWidth * 0.8} height={200} data={arr}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={type} fill={color} />
            </BarChart>
        </Stack>
    );
};

export default Graph;
