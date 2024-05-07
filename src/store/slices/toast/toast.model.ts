import {ToastEnum} from '@/models/toast.enum';

export interface Toast {
  message: string;
  type?: ToastEnum;
  autoHideDuration?: number;
}

export interface ToastState {
  isOpen: boolean;
  toast: null | Toast;
}
