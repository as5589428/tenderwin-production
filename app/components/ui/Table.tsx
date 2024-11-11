import React, { ReactNode } from 'react';

// Define types for props
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

// Table component
export const Table: React.FC<TableProps> = ({ children }) => {
  return <table className="table">{children}</table>;
};

// TableHeader component
export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

// TableBody component
export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

// TableRow component
export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

// TableHead component
export const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return <th>{children}</th>;
};

// TableCell component
export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>;
};
