import { ComponentProps } from 'react';
import styles from './VisuallyHidden.module.css';

function VisuallyHidden({ children, ...restProps }: ComponentProps<'span'>) {
  return (
    <span {...restProps} className={styles.wrapper}>
      {children}
    </span>
  );
}

export default VisuallyHidden;
