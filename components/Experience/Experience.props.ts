import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IExp } from '../../interfaces';

export interface ExperienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  experience: IExp[];
}
