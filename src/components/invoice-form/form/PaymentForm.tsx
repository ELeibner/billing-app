import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography
} from '@mui/material';
import FormDatePicker from '../../../ui/forms/FormDatePicker';
import FormInput from '../../../ui/forms/FormInput';
import FormSelector from '../../../ui/forms/FormSelector';

export const PaymentForm = () => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography id="invoice-payment-details" variant="h6">
                    {'Payment'}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="column" spacing={2}>
                    <FormSelector
                        name="payment.type"
                        defaultValue="Credit Card"
                        label="Payment type"
                        menuItems={[
                            { key: 'creditCard', value: 'Credit Card' },
                            { key: 'cash', value: 'Cash' }
                        ]}
                    />
                    <FormDatePicker
                        name="payment.date"
                        label="Payment Date"
                        required
                    />
                    <FormInput
                        name="payment.delay"
                        type="number"
                        label="Payment Delay"
                        variant="filled"
                    />
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};
