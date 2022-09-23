import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEducations } from '../../../interfaces';

export interface EducationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  education: IEducations[];
}
