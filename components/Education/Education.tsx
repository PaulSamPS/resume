import React from 'react';
import styles from './Education.module.scss';
import { H } from '../H/H';
import { IEducations } from './educations.interface';
import { Span } from '../Span/Span';
import { P } from '../P/P';
import { Divider } from '../Divider/DIvider';

const educations = [
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

export const Education = () => {
  return (
    <div className={styles.wrapper}>
      <H appearance='uppercase' border='bottom'>
        Образование
      </H>
      <div className={styles.educations}>
        {educations.map((e: IEducations) => (
          <div key={e.id} className={styles.item}>
            <Span>{e.years}</Span>
            <P>{e.position}</P>
            <Divider appearance='horizontal' arr={educations} itemId={e.id} />
            <Span>{e.company}</Span>
            <P>{e.des}</P>
          </div>
        ))}
      </div>
    </div>
  );
};
