import React, { ForwardedRef, forwardRef } from 'react';
import { Divider, H, P, Span } from '../Ui';
import { EducationProps } from './Education.props';

import styles from './Education.module.scss';

export const Education = forwardRef(({ education }: EducationProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <H appearance='uppercase' border='bottom'>
        Образование
      </H>
      <div className={styles.educations}>
        {education.map((e, index) => (
          <div key={e._id} className={styles.item}>
            <Span>{e.author}</Span>
            <P>{e.name}</P>
            <Divider appearance='horizontal' arr={education} index={index} />
            <P>{e.desc}</P>
          </div>
        ))}
      </div>
    </div>
  );
});
