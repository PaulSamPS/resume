import { PProps } from './P.props';
import styles from './P.module.scss';

export const P = ({ children, className, ...props }: PProps): JSX.Element => {
  return (
    <p className={styles.p} {...props}>
      {children}
    </p>
  );
};
