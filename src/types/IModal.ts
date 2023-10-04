import { ReactNode } from 'react';

export interface IModal {
  children?: ReactNode;
  isVisible: boolean;
  toggle: (boolean: boolean) => void;
}
