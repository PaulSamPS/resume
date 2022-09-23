import React, { ForwardedRef, forwardRef } from 'react';
import { IntroType } from './Intro.type';
import classNames from 'classnames';
import { H, P } from '../../Ui';

import styles from './Intro.module.scss';

export const Intro = forwardRef(({ className, ...props }: IntroType, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={classNames(className, styles.container)} ref={ref} {...props}>
      <div className={styles.wrapper}>
        <H>
          Привет, <span>я Павел</span>. Приятно познакомиться.
        </H>
        <P>
          Стремлюсь стать частью дружной и профессиональной команды, в которой я мог бы развивать свои навыки разработки
          React, TypeScript, Redux, Websocket и React-Native для достижения командных результатов.
        </P>
      </div>
    </div>
  );
});
