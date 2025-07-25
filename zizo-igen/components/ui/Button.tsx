import React from 'react';

// Using `any` for props for simplicity in this context.
export const Button = ({ children, onClick, type = 'button', disabled = false, variant = 'primary', size = 'md', className = '' }: any) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-base rounded-full',
    lg: 'px-8 py-3 text-lg rounded-full',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/50',
    secondary: 'bg-white/10 hover:bg-white/20 focus:ring-fuchsia-500',
  };
  
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  );
};
