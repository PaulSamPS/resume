import { PProps } from './P.props';
import styles from './P.module.scss';
import classNames from 'classnames';

export const P = ({ children, className, ...props }: PProps): JSX.Element => {
  return (
    <p className={classNames(className, styles.p)} {...props}>
      {children}
    </p>
  );
};
