import React from 'react';
import styles from './Intro.module.scss';
import { IntroType } from './Intro.type';
import classNames from 'classnames';
import { H } from '../H/H';
import { P } from '../P/P';

export const Intro = ({ className, ...props }: IntroType) => {
  return (
    <div className={classNames(className, styles.container)} {...props}>
      <div className={styles.wrapper}>
        <H>Hi, I’m Pavel. Nice to meet you.</H>
        <P>
          Artificial intelligence (AI), sometimes called machine intelligence, is intelligence
          demonstrated by machines, unlike the natural intelligence displayed by humans and animals.
          Leading AI textbooks define the field as the study of "intelligent agents": any device
          that perceives its environment and takes actions that maximize its chance of successfully
          achieving its goals.
        </P>
      </div>
    </div>
  );
};
