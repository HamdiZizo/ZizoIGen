import React from 'react';
import { WandSparklesIcon } from './icons.js';

export default function Header() {
  return (
    <header className="text-center p-4 md:p-6 bg-black/20 backdrop-blur-sm">
      <h1 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500"
        style={{ textShadow: '0 0 15px rgba(217, 70, 239, 0.5), 0 0 5px rgba(255, 255, 255, 0.3)' }}
      >
        <WandSparklesIcon className="inline-block w-10 h-10 mr-2 -mt-2" />
        Zizo Imaginations
      </h1>
    </header>
  );
}
