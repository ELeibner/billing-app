import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Stack,
    Typography
} from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';
import FormInput from '../../../ui/forms/FormInput';

export const ServicesForm = () => {
    const { control, setValue, getValues } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'services'
    });

    return (
        <>
            {fields.map((field, index) => (
                <Accordion key={field.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography id="invoice-services" variant="h6">
                            {`Service no. ${index + 1}`}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={2}>
                            <FormInput
                                name={`services[${index}].name`}
                                label="Name"
                                multiline
                                rows={3}
                                required
                                onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        e.preventDefault();
                                        setValue(
                                            `services[${index}].name`,
                                            getValues(
                                                `services[${index}].name`
                                            ) + '\n'
                                        );
                                    }
                                }}
                            />
                            <FormInput
                                name={`services[${index}].quantity`}
                                type="number"
                                label="Quantity"
                                required
                            />
                            <FormInput
                                name={`services[${index}].price`}
                                type="number"
                                label="Price"
                                required
                            />
                            <Button onClick={() => remove(index)} color="error">
                                Delete
                            </Button>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
            <Button onClick={() => append({ name: '', quantity: 1, price: 0 })}>
                Add Service
            </Button>
        </>
    );
};
