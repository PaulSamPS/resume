import { HProps } from './H.props';
import styles from './H.module.scss';
import classNames from 'classnames';

export const H = ({ border, appearance, className, children, ...props }: HProps): JSX.Element => {
  return (
    <h1
      className={classNames(className, styles.wrapper, {
        [styles.uppercase]: appearance === 'uppercase',
        [styles.border]: border === 'bottom',
      })}
      {...props}
    >
      {children}
    </h1>
  );
};
