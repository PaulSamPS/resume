import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Experience.module.scss';
import { ExperienceType } from './Experience.type';
import classNames from 'classnames';
import { IExp } from './experince.interface';
import { Divider } from '../Divider/DIvider';
import { H } from '../H/H';
import { P } from '../P/P';
import { Span } from '../Span/Span';

const exp = [
  {
    id: 0,
    years: '2021 - 2021',
    position: 'FULL STACK DEVELOPER',
    company: 'Wix',
    des: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
  },
  {
    id: 1,
    years: '2021 - 2021',
    position: 'FULL STACK DEVELOPER',
    company: 'Google',
    des: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
  },
  {
    id: 2,
    years: '2021 - 2021',
    position: 'FULL STACK DEVELOPER',
    company: 'Facebook',
    des: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
  },
];

export const Experience = forwardRef(
  ({ className, ...props }: ExperienceType, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={classNames(className, styles.wrapper)} ref={ref} {...props}>
        <H appearance='uppercase' border='bottom'>
          Опыт
        </H>
        <div className={styles.experience}>
          {exp.map((e: IExp) => (
            <div key={e.id} className={styles.item}>
              <div className={styles.date}>
                <Span>{e.years}</Span>
                <P>{e.position}</P>
              </div>
              <Divider appearance='vertical' arr={exp} itemId={e.id} />
              <div className={styles.company}>
                <Span>{e.company}</Span>
                <P>{e.des}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
