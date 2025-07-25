import React from 'react';

// Using `any` for props for simplicity in this context.
export const Card = ({ children, className = '' }: any) => {
  const cardClassName = `bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 ${className}`;
  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
};
