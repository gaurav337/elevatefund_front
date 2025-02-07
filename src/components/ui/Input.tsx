import React from 'react';
import { cn } from '../../utils/cn';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="input-container">
        {label && (
          <label className="input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'input-field',
            error && 'error',
            className
          )}
          {...props}
        />
        {error && (
          <p className="input-error-message">{error}</p>
        )}
      </div>
    );
  }
); 