import React, { ReactNode } from 'react';

// Define types for props
interface SelectProps {
  children: ReactNode;
  onValueChange: (value: string) => void;
}

interface SelectContentProps {
  children: ReactNode;
}

interface SelectItemProps {
  value: string;
  children: ReactNode;
}

interface SelectTriggerProps {
  children: ReactNode;
}

interface SelectValueProps {
  placeholder: string;
}

interface TableProps {
  children: ReactNode;
}

interface TableHeaderProps {
  children: ReactNode;
}

interface TableBodyProps {
  children: ReactNode;
}

interface TableRowProps {
  children: ReactNode;
}

interface TableHeadProps {
  children: ReactNode;
}

interface TableCellProps {
  children: ReactNode;
}

// Select components
export const Select: React.FC<SelectProps> = ({ children, onValueChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {children}
      </select>
    </div>
  );
};

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => <>{children}</>;

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => (
  <div>{children}</div>
);

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => (
  <span>{placeholder}</span>
);

// Table components
export const Table: React.FC<TableProps> = ({ children }) => (
  <table>
    {children}
  </table>
);

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
  <thead>
    {children}
  </thead>
);

export const TableBody: React.FC<TableBodyProps> = ({ children }) => (
  <tbody>
    {children}
  </tbody>
);

export const TableRow: React.FC<TableRowProps> = ({ children }) => (
  <tr>
    {children}
  </tr>
);

export const TableHead: React.FC<TableHeadProps> = ({ children }) => (
  <th>
    {children}
  </th>
);

export const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <td>
    {children}
  </td>
);
