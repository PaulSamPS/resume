import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProjectItem } from '../../interfaces/project.interface';

export interface ProjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  projects: IProjectItem[];
}
