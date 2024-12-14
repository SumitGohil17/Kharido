// ./components/ui/Badge.js

import React from 'react';

export function Badge({ children, className }) {
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-sm font-semibold ${className}`}>
      {children}
    </span>
  );
}
