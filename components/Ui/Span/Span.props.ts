import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SpanProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
}
