import { InputAdornment, Stack, Typography } from '@mui/material';
import FormInput from '../../../ui/forms/FormInput';

export const Total = () => {
    return (
        <>
            <Typography id="invoice-total" variant="h6">
                {'Total (EUR)'}
            </Typography>
            <Stack direction="column" spacing={2} justifyContent="space-evenly">
                <FormInput
                    name="total.tax"
                    type="number"
                    label="Tax"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">€</InputAdornment>
                        )
                    }}
                />
                <FormInput
                    name="total.amount"
                    type="number"
                    label="Total"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">€</InputAdornment>
                        )
                    }}
                />
            </Stack>
        </>
    );
};
