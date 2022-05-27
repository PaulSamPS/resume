import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IExp } from '../Experience/experince.interface';

export interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance: 'horizontal' | 'vertical';
  arr: IExp[];
  itemId: number;
}
