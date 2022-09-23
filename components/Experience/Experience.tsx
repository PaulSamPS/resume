import React, { ForwardedRef, forwardRef } from 'react';
import { ExperienceProps } from './Experience.props';
import { Divider, H, P, Span } from '../Ui';
import classNames from 'classnames';

import styles from './Experience.module.scss';

export const Experience = forwardRef(
  ({ experience, className, ...props }: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={classNames(className, styles.wrapper)} ref={ref} {...props}>
        <H appearance='uppercase' border='bottom'>
          Опыт
        </H>
        <div className={styles.experience}>
          {experience.map((e, index) => (
            <div key={e._id} className={styles.item}>
              <div className={styles.type}>
                <Span>{e.type}</Span>
                <P>{e.position}</P>
              </div>
              <Divider appearance='vertical' arr={experience} index={index} />
              <div className={styles.name}>
                {e.projectLink !== '' ? (
                  <a href={e.projectLink} target={'_blank'}>
                    <Span>{e.name}</Span>
                  </a>
                ) : (
                  <Span>{e.name}</Span>
                )}
                <P>{e.desc}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
