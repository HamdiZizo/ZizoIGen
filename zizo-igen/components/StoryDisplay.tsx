import React from 'react';
import { Card } from './ui/Card.js';
import { Button } from './ui/Button.js';
import { Loader } from './ui/Loader.js';
import { ImageIcon, AlertTriangleIcon, DownloadIcon, PlusCircleIcon, SparklesIcon } from './icons.js';

export default function StoryDisplay({ generationState, imagination, error, onCreateNew }) {

  const handleDownload = () => {
    if (imagination?.imageUrl) {
      const link = document.createElement('a');
      link.href = imagination.imageUrl;
      link.download = `zizo-imagination-${imagination.id}.jpeg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderContent = () => {
    switch (generationState) {
      case 'generating':
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
            <Loader />
            <h2 className="text-2xl font-bold text-white">Creating your masterpiece...</h2>
            <p className="text-gray-400">The cosmic energies are aligning. Please wait a moment.</p>
          </div>
        );
      case 'error':
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
            <AlertTriangleIcon className="w-16 h-16 text-red-500" />
            <h2 className="text-2xl font-bold text-white">An Error Occurred</h2>
            <p className="text-red-400 bg-red-900/50 p-3 rounded-lg max-w-md">{error || 'Something went wrong.'}</p>
            <Button onClick={onCreateNew}>Try Again</Button>
          </div>
        );
      case 'done':
        if (imagination) {
          return (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 items-center">
                <Button onClick={handleDownload} variant="secondary">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button onClick={onCreateNew} variant="secondary">
                   <PlusCircleIcon className="w-4 h-4 mr-2" />
                  Create Another
                </Button>
              </div>
              <img src={imagination.imageUrl} alt={imagination.formData.mainPrompt} className="w-full h-auto rounded-lg shadow-2xl border-2 border-white/10" />
              <div className="bg-black/20 p-4 rounded-lg">
                <h3 className="font-semibold text-fuchsia-400 mb-2 flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5" />
                    Final Prompt Used
                </h3>
                <p className="text-sm text-gray-300 font-mono select-all" style={{ whiteSpace: 'pre-wrap' }}>{imagination.finalPrompt}</p>
              </div>
            </div>
          );
        }
        // Fallthrough to idle if done but no imagination is selected
      case 'idle':
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <ImageIcon className="w-24 h-24 text-gray-500 mb-4" />
            <h2 className="text-3xl font-bold text-white">Welcome to Zizo Imaginations</h2>
            <p className="text-gray-400 mt-2 max-w-md">Use the form to describe your vision and watch it come to life. Your creations will appear here.</p>
          </div>
        );
    }
  };

  return (
    <Card className="min-h-[60vh] flex items-center justify-center">
      {renderContent()}
    </Card>
  );
                                                                                                                                                                                                                                                }