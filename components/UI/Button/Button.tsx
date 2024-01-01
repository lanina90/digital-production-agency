import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import styles from './Button.module.scss'

type LinkProps = Omit<NextLinkProps, 'href'> & {
  href: string;
  component: 'link';
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: 'button';
};

type CommonProps = {
  children: ReactNode;
  className?: string | null;
};
type Props  = CommonProps & (LinkProps | ButtonProps);
const Button: React.FC<Props> = props   => {
  const {
    children,
    className,
    component = 'button',
    ...otherProps
  } = props;

  if (component === 'link') {
    const { href, ...linkProps } = otherProps as LinkProps;
    return (
      <Link href={href} {...linkProps} className={styles.button}>
        {children}
      </Link>
    );
  }

  const buttonProps = otherProps as ButtonProps;
  return (
    <button type="button" className={styles.button} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;