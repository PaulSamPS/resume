import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IEducations } from '../../interfaces/educations.interface';

export interface EducationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  education: IEducations[];
}
