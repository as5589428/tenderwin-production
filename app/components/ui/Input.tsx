import React from 'react';
import { cn } from '../../lib/utils'; // Ensure this utility is available

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', value, onChange, placeholder, label, id, required = false, ...props }, ref) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          ref={ref}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
          style={{ marginTop: '0.5rem', padding: '0.5rem' }} // Optional styling
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
