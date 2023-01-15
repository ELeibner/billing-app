export interface Mail {
    to: string;
    subject?: string;
    message?: string;
    html?: HTMLElement;
    base64: string;
    fileName: string;
}
