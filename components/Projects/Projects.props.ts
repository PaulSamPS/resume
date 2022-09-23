import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProjectItem } from '../../interfaces';

export interface ProjectsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  projects: IProjectItem[];
}
