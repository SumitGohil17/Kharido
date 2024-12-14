import React from 'react';

export function Button({ variant, size, className, children, ...props }) {
  return (
    <button
      className={`button ${variant} ${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
