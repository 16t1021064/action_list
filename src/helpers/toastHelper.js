import { toast } from 'react-toastify';

export const toastError = error => {
    let message = null;
    if (typeof error === 'object' && error.hasOwnProperty('message')) {
        ({ message } = error);
    }
    if (message !== null && typeof message !== 'undefined' && message !== '') {
        toast.error(message)
    }
}
