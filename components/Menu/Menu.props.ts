import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenuItem } from '../../interfaces/menu.interface';

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menu: IMenuItem[];
  setLink: (link: string) => void;
}
