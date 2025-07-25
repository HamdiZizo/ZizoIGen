import React from 'react';

export const Loader = (props: any) => (
  <svg
    {...props}
    width="64"
    height="64"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke="url(#gradient)"
  >
    <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" /> 
            <stop offset="50%" stopColor="#d946ef" /> 
            <stop offset="100%" stopColor="#ec4899" /> 
        </linearGradient>
    </defs>
    <g fill="none" strokeWidth="2" strokeLinecap="round">
      <path d="M12 3C16.9706 3 21 7.02944 21 12">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);
