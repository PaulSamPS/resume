import React, { ForwardedRef, forwardRef } from 'react';
import { H } from '../Ui/H/H';
import styles from './Skills.module.scss';
import { P } from '../Ui/P/P';
import { SkillsType } from './Skills.type';
import classNames from 'classnames';

export const Skills = forwardRef(({ skills, className, ...props }: SkillsType, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={classNames(className, styles.wrapper)} ref={ref} {...props}>
      <H appearance='uppercase' border='bottom'>
        Навыки
      </H>
      <div className={styles.skills}>
        {skills.map((s) => (
          <div key={s._id} className={styles.item}>
            <P>{s.name}</P>
            <div />
          </div>
        ))}
      </div>
    </div>
  );
});
