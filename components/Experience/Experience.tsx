import React from 'react';
import styles from './Experience.module.scss';
import { ExperienceType } from './Experience.type';
import classNames from 'classnames';

interface IExp {
  id: number;
  years: string;
  position: string;
  company: string;
  des: string;
}

const exp = [
  {
    id: 0,
    years: '2021 - 2021',
    position: 'FULL STACK DEVELOPER',
    company: 'Wix',
    des: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident.',
  },
];

export const Experience = ({ className, ...props }: ExperienceType) => {
  return (
    <div className={classNames(className, styles.wrapper)} {...props}>
      <div className={styles.title}>
        <h1>Experience</h1>
      </div>
      <div className={styles.experience}>
        {exp.map((e: IExp) => (
          <div key={e.id} className={styles.item}>
            <div className={styles.date}>
              <span>{e.years}</span>
              <span>{e.position}</span>
            </div>
            <div className={styles.divider}>
              <div />
            </div>
            <div className={styles.company}>
              <span>{e.company}</span>
              <span>{e.des}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
