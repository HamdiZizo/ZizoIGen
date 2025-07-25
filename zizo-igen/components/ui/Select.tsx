import React from 'react';

// Using `any` for props for simplicity in this context.
export const Select = ({ label, name, value, onChange, options, ...props }: any) => {
  const id = name; // Use name for id for simplicity
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-black/30 border border-white/20 rounded-lg p-2.5 text-gray-200 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition duration-200"
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-gray-800 text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};