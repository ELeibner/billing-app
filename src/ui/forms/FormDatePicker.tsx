import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FormDatePicker: FC<
    Partial<typeof MobileDatePicker> & {
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
                <MobileDatePicker
                    {...field}
                    {...props}
                    label={label}
                    closeOnSelect
                    inputFormat="DD / MM / YYYY"
                    renderInput={(params: any) => <TextField {...params} />}
                />
            )}
        />
    );
};

export default FormDatePicker;
