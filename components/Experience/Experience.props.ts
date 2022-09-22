import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IExp } from '../../interfaces/experince.interface';

export interface ExperienceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  experience: IExp[];
}
