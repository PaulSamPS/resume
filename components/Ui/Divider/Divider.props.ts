import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEducations, IExp } from '../../../interfaces';

export interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance: 'horizontal' | 'vertical';
  arr: IExp[] | IEducations[];
  index: number;
}
