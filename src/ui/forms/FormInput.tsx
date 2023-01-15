import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FormInput: FC<
    TextFieldProps & { name: string; required?: boolean }
> = ({ name, required, ...props }) => {
    const { control, register } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={props.type === 'number' ? 0 : ''}
            render={({ field, formState: { errors } }) => {
                return (
                    <TextField
                        {...props}
                        {...field}
                        {...register(name, {
                            ...(required && {
                                required: { value: true, message: 'Required' }
                            })
                        })}
                        label={!required ? props.label : props.label + '*'}
                        error={!!errors[name]}
                        {...(errors[name] && {
                            helperText: errors[name]?.message
                        })}
                    />
                );
            }}
        />
    );
};

export default FormInput;
