import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  as?: typeof Link;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  to,
  as: Component = 'button',
  ...props
}) => {
  const baseStyles = 'button-base';

  const variants = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    ghost: 'button-ghost',
    outline: 'button-outline'
  };

  const sizes = {
    sm: 'button-sm',
    md: 'button-md',
    lg: 'button-lg'
  };

  const styles = cn(baseStyles, variants[variant], sizes[size], className);

  if (to && Component === Link) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
