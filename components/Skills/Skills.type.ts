import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISkillItem } from '../../interfaces';

export interface SkillsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skills: ISkillItem[];
}
