import React from 'react';
import { Card } from './ui/Card.js';
import { Button } from './ui/Button.js';
import { BookOpenIcon, PlusCircleIcon } from './icons.js';

export default function HistoryPanel({ imaginations, selectedId, onSelect, onCreateNew }) {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6 text-fuchsia-400" />
            History
        </h2>
        <Button onClick={onCreateNew} variant="secondary" size="sm" aria-label="Create new imagination">
            <PlusCircleIcon className="w-4 h-4 mr-1"/>
            New
        </Button>
      </div>
      <div className="max-h-96 overflow-y-auto pr-2 flex flex-col gap-2">
        {imaginations.length === 0 ? (
          <p className="text-gray-400 text-sm p-4 text-center">Your generated images will appear here.</p>
        ) : (
          imaginations.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full text-left p-2 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
                selectedId === item.id 
                  ? 'bg-fuchsia-500/30 ring-2 ring-fuchsia-400' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              aria-current={selectedId === item.id ? 'true' : 'false'}
            >
              <img 
                src={item.imageUrl} 
                alt="thumbnail" 
                className="w-12 h-12 rounded-md object-cover flex-shrink-0 bg-black/50" 
              />
              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-white truncate">{item.formData.mainPrompt}</p>
                <p className="text-xs text-gray-400 truncate">{item.formData.artisticStyle}</p>
              </div>
            </button>
          ))
        )}
      </div>
    </Card>
  );
}
