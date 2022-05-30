import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISkillItem } from '../../interfaces/skills.interfface';

export interface SkillsType
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skills: ISkillItem[];
}
