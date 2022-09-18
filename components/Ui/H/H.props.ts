import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  appearance?: 'uppercase';
  border?: 'bottom';
}
