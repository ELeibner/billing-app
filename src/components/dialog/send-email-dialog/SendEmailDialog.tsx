import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import { Invoice } from '../../../interfaces';
import { DialogBase } from '../DialogBase';
import { EmailForm } from './EmailForm';

interface SendEmailDialogProps {
    title: string;
    to: string;
    data: Invoice;
}

export const SendEmailDialog = ({ title, to, data }: SendEmailDialogProps) => {
    return (
        <DialogBase title={title} content={<EmailForm to={to} data={data} />}>
            <IconButton>
                <EmailIcon fontSize="large" />
            </IconButton>
        </DialogBase>
    );
};
