import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography
} from '@mui/material';
import FormInput from '../../../ui/forms/FormInput';

export const CustomerForm = () => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography id="invoice-Customer-details" variant="h6">
                    {'Customer'}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="column" spacing={2}>
                    <FormInput name="customer.name" label="Name" required />
                    <FormInput
                        name="customer.taxId"
                        type="string"
                        label="Tax ID"
                        required
                    />
                    <FormInput name="customer.location" label="Location" />
                    <FormInput
                        name="customer.email"
                        type="email"
                        label="Email"
                    />
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};
