import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const DEFAULT_OPTIONS = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 5000,
};

export function notificationError(message) {
  toast.error(message, DEFAULT_OPTIONS);
}

export function notificationSuccess(message) {
  toast.success(message, DEFAULT_OPTIONS);
}
