import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Button, Stack } from '@mui/material';
import { pdf, PDFDownloadLink } from '@react-pdf/renderer';
import { useContext } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '../../../api';
import { Invoice } from '../../../interfaces';
import { Mail } from '../../../interfaces/mail.interface';
import { FormInput } from '../../../ui/forms';
import { NotificationContext } from '../../context-provider/notification-provider/NotificationProvider';
import { InvoicePDF } from '../../invoice-pdf/InvoicePDF';
import { DialogContext } from '../DialogBase';

interface EmailFormProps {
    to: string;
    data: Invoice;
}

export const EmailForm = ({ to, data: invoiceData }: EmailFormProps) => {
    const { showSuccess } = useContext(NotificationContext);
    const { setOpen } = useContext(DialogContext);
    const fileName = `${invoiceData.type.toLocaleLowerCase()}-${
        invoiceData.number
    }.pdf`;

    const methods = useForm<Mail>({
        defaultValues: {
            to: to,
            subject: `${invoiceData.type} ${invoiceData.number}`,
            message: `Hello,\n\nthis ${invoiceData.type} was generated in demo billing application.`
        },

        reValidateMode: 'onChange'
    });

    const onFormSubmit: SubmitHandler<Mail> = async (data) => {
        const blob = await pdf(<InvoicePDF data={invoiceData} />).toBlob();
        const convertBlobToBase64 = function blobToBase64(blob: Blob) {
            return new Promise((resolve, _) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            });
        };
        const base64 = await convertBlobToBase64(blob);
        await sendEmail({
            ...data,
            base64: base64 as string,
            fileName
        });
        showSuccess();
        setOpen(false);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                <Stack
                    direction="column"
                    sx={{
                        padding: '8px 0'
                    }}
                    gap={2}
                >
                    <Stack gap={2}>
                        <FormInput name="to" type="text" label="To" required />
                        <FormInput
                            name="subject"
                            type="text"
                            label="Subject"
                            required
                        />
                        <FormInput
                            name="message"
                            type="text"
                            label="Message"
                            multiline
                            rows={8}
                            required
                        />
                        <Stack
                            sx={{
                                border: '1px solid #d6cbcb',
                                background: '#f4f1f1',
                                borderRadius: '6px',
                                padding: '2px 16px'
                            }}
                            direction="row"
                            gap={1}
                        >
                            <PictureAsPdfIcon />
                            <PDFDownloadLink
                                document={<InvoicePDF data={invoiceData} />}
                                fileName={fileName}
                            >
                                {({ blob, url, loading, error }) =>
                                    loading ? (
                                        'Loading document...'
                                    ) : (
                                        <div>{fileName}</div>
                                    )
                                }
                            </PDFDownloadLink>
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent={'end'} gap={2}>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={!methods.formState.isValid}
                            autoFocus
                        >
                            Send
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </FormProvider>
    );
};
