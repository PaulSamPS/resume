import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IExp } from '../../../interfaces/experince.interface';
import { IEducations } from '../../../interfaces/educations.interface';

export interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance: 'horizontal' | 'vertical';
  arr: IExp[] | IEducations[];
  index: number;
}
