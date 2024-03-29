import React from 'react';
import classNames from 'classnames';
import styles from './Divider.module.scss';
import { DividerProps } from './Divider.props';

export const Divider = ({ arr, index, appearance, className, ...props }: DividerProps) => {
  return (
    <div
      className={classNames(className, styles.divider, {
        [styles.vertical]: appearance === 'vertical',
        [styles.horizontal]: appearance === 'horizontal',
        [styles.dividerLast]: arr.length - 1 === index,
      })}
      {...props}
    >
      <div />
    </div>
  );
};
