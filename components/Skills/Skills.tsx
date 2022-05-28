import React, { ForwardedRef, forwardRef } from 'react';
import { H } from '../H/H';
import styles from './Skills.module.scss';
import { ISkills } from './skills.interface';
import { P } from '../P/P';
import { SkillsType } from './Skills.type';
import classNames from 'classnames';

const skills = [
  { id: 0, name: 'React' },
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Redux' },
  { id: 4, name: 'HTML' },
  { id: 5, name: 'Css/Scss' },
  { id: 6, name: 'Styled Components' },
  { id: 7, name: 'NextJs' },
  { id: 8, name: 'ExpressJs' },
  { id: 9, name: 'PostgreSQL' },
  { id: 10, name: 'MongoDB' },
];

export const Skills = forwardRef(
  ({ className, ...props }: SkillsType, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={classNames(className, styles.wrapper)} ref={ref} {...props}>
        <H appearance='uppercase' border='bottom'>
          Навыки
        </H>
        <div className={styles.skills}>
          {skills.map((s: ISkills) => (
            <div key={s.id} className={styles.item}>
              <P>{s.name}</P>
              <div />
            </div>
          ))}
        </div>
      </div>
    );
  }
);
