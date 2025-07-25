import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header.js';
import StoryForm from './components/StoryForm.js';
import StoryDisplay from './components/StoryDisplay.js';
import HistoryPanel from './components/HistoryPanel.js';
import { generateImage } from './services/geminiService.js';
import type { ImageFormData, Imagination, GenerationState } from './types.js';

export default function App() {
  const [imaginations, setImaginations] = useState([]);
  const [selectedImagination, setSelectedImagination] = useState(null);
  const [generationState, setGenerationState] = useState('idle');
  const [error, setError] = useState(null);
  const [totalGeneratedCount, setTotalGeneratedCount] = useState(0);

  const handleGenerateImage = useCallback(async (formData) => {
    setGenerationState('generating');
    setSelectedImagination(null);
    setError(null);
    try {
      const { images, finalPrompt } = await generateImage(formData);
      
      const newImaginations = images.map(imageBase64 => ({
        id: uuidv4(),
        imageUrl: `data:image/jpeg;base64,${imageBase64}`,
        finalPrompt,
        formData,
      }));

      setImaginations(prev => [...newImaginations, ...prev]);
      setSelectedImagination(newImaginations[0]);
      setTotalGeneratedCount(prev => prev + images.length);
      setGenerationState('done');
    } catch (e) {
      console.error(e);
      setError(e.message);
      setGenerationState('error');
    }
  }, []);

  const handleCreateNew = useCallback(() => {
    setSelectedImagination(null);
    setGenerationState('idle');
    setError(null);
  }, []);

  const handleSelectImagination = useCallback((id) => {
    const imagination = imaginations.find(i => i.id === id);
    if (imagination) {
      setSelectedImagination(imagination);
      setGenerationState('done');
      setError(null);
    }
  }, [imaginations]);

  return (
    <div className="min-h-screen text-gray-100 font-sans flex flex-col">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-[420px] lg:flex-shrink-0 flex flex-col gap-8">
            <div className="lg:sticky lg:top-8 flex flex-col gap-8">
              <StoryForm
                isGenerating={generationState === 'generating'}
                onGenerate={handleGenerateImage}
              />
              <HistoryPanel
                imaginations={imaginations}
                selectedId={selectedImagination?.id}
                onSelect={handleSelectImagination}
                onCreateNew={handleCreateNew}
              />
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full">
            <StoryDisplay
              generationState={generationState}
              imagination={selectedImagination}
              error={error}
              onCreateNew={handleCreateNew}
            />
          </div>
        </div>
      </main>
    </div>
  );
}