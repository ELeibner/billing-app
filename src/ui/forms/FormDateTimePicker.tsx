import { TextField } from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FormDateTimePicker: FC<
    Partial<typeof MobileDateTimePicker> & {
        name: string;
        label: string;
        required?: boolean;
        defaultValue?: any;
    }
> = ({ name, label, defaultValue, ...props }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={dayjs()}
            render={({ field }) => (
                <MobileDateTimePicker
                    {...field}
                    {...props}
                    label={label}
                    /*                     ampm={false} */
                    closeOnSelect
                    inputFormat="DD / MM / YYYY HH:mm"
                    renderInput={(params: any) => <TextField {...params} />}
                />
            )}
        />
    );
};

export default FormDateTimePicker;
