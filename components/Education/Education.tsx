import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Education.module.scss';
import { H } from '../Ui/H/H';
import { IEducations } from '../../interfaces/educations.interface';
import { Span } from '../Ui/Span/Span';
import { P } from '../Ui/P/P';
import { Divider } from '../Ui/Divider/DIvider';
import { EducationProps } from './Education.props';

export const Education = forwardRef(({ education }: EducationProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <H appearance='uppercase' border='bottom'>
        Образование
      </H>
      <div className={styles.educations}>
        {education.map((e: IEducations, index) => (
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
