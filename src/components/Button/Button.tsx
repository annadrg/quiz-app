import { ComponentProps } from 'react';

function Button({ children, ...restProps }: ComponentProps<'button'>) {
  return <button {...restProps}>{children}</button>;
}

export default Button;
