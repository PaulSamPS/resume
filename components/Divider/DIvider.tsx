import React from 'react';
import classNames from 'classnames';
import styles from './Divider.module.scss';
import { DividerProps } from './Divider.props';

export const Divider = ({ arr, itemId, appearance, className, ...props }: DividerProps) => {
  return (
    <div
      className={classNames(className, styles.divider, {
        [styles.vertical]: appearance === 'vertical',
        [styles.dividerLast]: arr.length - 1 === itemId,
      })}
      {...props}
    >
      <div />
    </div>
  );
};
