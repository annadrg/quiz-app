import { ComponentProps } from 'react';
import styles from './Button.module.css';

function Button({ children, ...restProps }: ComponentProps<'button'>) {
  return (
    <button
      {...restProps}
      className={`${styles.button} ${restProps.className ?? ''}`}
    >
      {children}
    </button>
  );
}

export default Button;
