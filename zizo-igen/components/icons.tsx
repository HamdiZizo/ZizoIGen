import React from 'react';

// Using `any` for props as these are simple wrappers and we don't need complex prop types
export const WandSparklesIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 3 2.5 5L12 3l2.5 5L19 3l-2.5 5L21 12l-5 2.5L19 19l-5-2.5L12 21l-2.5-5L5 19l2.5-5L3 12l5-2.5Z" />
  </svg>
);

export const ImageIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

export const DownloadIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const PlusCircleIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="16" />
    <line x1="8" x2="16" y1="12" y2="12" />
  </svg>
);

export const AlertTriangleIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

export const BookOpenIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const SparklesIcon = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.93 2.14a2 2 0 0 1 3.14 0l.82 1.25a2 2 0 0 0 2.4 1.2l1.46-.22a2 2 0 0 1 2.2 2.2l-.22 1.46a2 2 0 0 0 1.2 2.4l1.25.82a2 2 0 0 1 0 3.14l-1.25.82a2 2 0 0 0-1.2 2.4l.22 1.46a2 2 0 0 1-2.2 2.2l-1.46-.22a2 2 0 0 0-2.4 1.2l-.82 1.25a2 2 0 0 1-3.14 0l-.82-1.25a2 2 0 0 0-2.4-1.2l-1.46.22a2 2 0 0 1-2.2-2.2l.22-1.46a2 2 0 0 0-1.2-2.4l-1.25-.82a2 2 0 0 1 0-3.14l1.25-.82a2 2 0 0 0 1.2-2.4l-.22-1.46a2 2 0 0 1 2.2-2.2l1.46.22a2 2 0 0 0 2.4-1.2z"/>
    </svg>
);
