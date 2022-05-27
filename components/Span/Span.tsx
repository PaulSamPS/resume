import { SpanProps } from './Span.props';
import styles from './Span.module.scss';

export const Span = ({ children, className, ...props }: SpanProps): JSX.Element => {
  return (
    <span className={styles.span} {...props}>
      {children}
    </span>
  );
};
