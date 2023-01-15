import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FormSelector: FC<
    TextFieldProps & {
        name: string;
        menuItems: { key: string; value: string }[];
        required?: boolean;
    }
> = ({ name, menuItems, ...props }) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            defaultValue={props.defaultValue}
            control={control}
            render={({ field }) => (
                <TextField {...field} select>
                    {menuItems &&
                        menuItems.map(
                            (item: { key: string; value: string }) => (
                                <MenuItem {...item}>{item.value}</MenuItem>
                            )
                        )}
                </TextField>
            )}
        />
    );
};

export default FormSelector;
