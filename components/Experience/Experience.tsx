import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Experience.module.scss';
import { ExperienceProps } from './Experience.props';
import classNames from 'classnames';
import { IExp } from '../../interfaces/experince.interface';
import { Divider } from '../Ui/Divider/DIvider';
import { H } from '../Ui/H/H';
import { P } from '../Ui/P/P';
import { Span } from '../Ui/Span/Span';

export const Experience = forwardRef(
  ({ experience, className, ...props }: ExperienceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={classNames(className, styles.wrapper)} ref={ref} {...props}>
        <H appearance='uppercase' border='bottom'>
          Опыт
        </H>
        <div className={styles.experience}>
          {experience.map((e: IExp, index) => (
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
