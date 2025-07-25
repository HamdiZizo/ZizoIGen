import React from 'react';

// Using `any` for props for simplicity in this context.
export const Textarea = ({ className = '', ...props }: any) => {
  const baseClassName = `w-full bg-black/30 border border-white/20 rounded-lg p-2.5 text-gray-200 placeholder-gray-500 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200 ${className}`;
  return <textarea className={baseClassName} {...props} />;
};
