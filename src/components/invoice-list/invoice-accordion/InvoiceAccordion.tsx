import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Grid,
    IconButton,
    Stack,
    Typography
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';
import { deleteInvoice } from '../../../api';
import { Invoice } from '../../../interfaces';
import { currencyFormat } from '../../../utils/currency-format';
import { ConfirmDialog } from '../../dialog/confirm-dialog/ConfirmDialog';
import { SendEmailDialog } from '../../dialog/send-email-dialog/SendEmailDialog';
import { InvoicePDF } from '../../invoice-pdf/InvoicePDF';
import './InvoiceAccordion.css';

interface InvoiceAccordionProps {
    data: Invoice;
    onDelete: () => void;
    children: JSX.Element;
}

export const InvoiceAccordion = ({
    data,
    onDelete,
    children
}: InvoiceAccordionProps) => {
    const navigate = useNavigate();
    return (
        <Accordion sx={{ width: '90vw' }} data-testid="invoice-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Grid item>
                            <Chip
                                label={`#${data.number} ${data.type}`}
                                variant={'outlined'}
                                color={
                                    data.type === 'Invoice'
                                        ? 'success'
                                        : 'default'
                                }
                                className={'chip'}
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                id="invoice-accordion-details"
                                variant="body1"
                                style={{
                                    maxWidth: '26vw',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                {data.customer?.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Chip
                                label={currencyFormat(data.total?.amount!)}
                                variant={'outlined'}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Stack gap={2}>
                    <Stack direction="column" spacing={1}>
                        {children}
                    </Stack>
                    <Stack direction="row" justifyContent="space-evenly">
                        <PDFDownloadLink
                            document={<InvoicePDF data={data} />}
                            fileName={`${data.type?.toLocaleLowerCase()}-${
                                data.number
                            }.pdf`}
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? (
                                    <CircularProgress />
                                ) : (
                                    <IconButton color="error">
                                        <PictureAsPdfIcon fontSize="large" />
                                    </IconButton>
                                )
                            }
                        </PDFDownloadLink>
                        <IconButton
                            onClick={() => navigate(`/invoice/${data.id}`)}
                        >
                            <EditIcon fontSize="large" />
                        </IconButton>
                        <SendEmailDialog
                            title="Send email"
                            to="some@email.com"
                            data={data}
                        />
                        <ConfirmDialog
                            title={`Delete ${data.type}`}
                            content="Confirm that you want to delete this item permanently."
                            onSubmit={() => {
                                deleteInvoice(data.id);
                                onDelete();
                            }}
                        >
                            <IconButton>
                                <DeleteIcon fontSize="large" />
                            </IconButton>
                        </ConfirmDialog>
                    </Stack>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};

export default InvoiceAccordion;
