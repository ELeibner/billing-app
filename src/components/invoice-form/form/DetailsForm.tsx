import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { FormSelector } from '../../../ui/forms';
import FormDateTimePicker from '../../../ui/forms/FormDateTimePicker';
import FormInput from '../../../ui/forms/FormInput';

export const DetailsForm = () => {
    const [open, setOpen] = useState(true);

    return (
        <Accordion expanded={open}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={() => setOpen(!open)}
            >
                <Typography id="invoice-details" variant="h6">
                    {'Document details'}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction="column" spacing={2}>
                    <FormSelector
                        name="type"
                        defaultValue="Invoice"
                        label="Invoice Type"
                        menuItems={[
                            { key: 'invoice', value: 'Invoice' },
                            { key: 'offer', value: 'Offer' }
                        ]}
                    />
                    <FormInput
                        name="number"
                        type="number"
                        label="Number"
                        required
                    />
                    <FormDateTimePicker name="createdAt" label="Invoice Date" />
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};
