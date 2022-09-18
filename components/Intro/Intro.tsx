import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Intro.module.scss';
import { IntroType } from './Intro.type';
import classNames from 'classnames';
import { H } from '../Ui/H/H';
import { P } from '../Ui/P/P';

export const Intro = forwardRef(({ className, ...props }: IntroType, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={classNames(className, styles.container)} ref={ref} {...props}>
      <div className={styles.wrapper}>
        <H>
          Привет, <span>я Павел</span>. Приятно познакомиться.
        </H>
        <P>
          Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines,
          unlike the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the
          study of intelligent agents: any device that perceives its environment and takes actions that maximize its
          chance of successfully achieving its goals.
        </P>
      </div>
    </div>
  );
});
