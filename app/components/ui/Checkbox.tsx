// src/components/ui/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange, label, id }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{ marginRight: '0.5rem' }} // Optional styling
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
