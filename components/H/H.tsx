import { HProps } from './H.props';
import styles from './H.module.scss';

export const H = ({ children }: HProps): JSX.Element => {
  return <h1 className={styles.h1}>{children}</h1>;
};
