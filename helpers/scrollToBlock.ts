import { RefObject } from 'react';

export const scrollToBlock = (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  ref.current?.focus();
};
