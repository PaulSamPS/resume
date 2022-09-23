import React, { ForwardedRef, forwardRef } from 'react';
import { H, P } from '../../Ui';
import { SkillsType } from './Skills.type';
import classNames from 'classnames';

import styles from './Skills.module.scss';

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
