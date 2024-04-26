import {ReactNode} from 'react';

export type ModalContent = ReactNode | null;

export interface DialogState {
  dialogContent: ModalContent;
  isOpen: boolean;
}
