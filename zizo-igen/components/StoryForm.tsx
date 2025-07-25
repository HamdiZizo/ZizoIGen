import React, { useState } from 'react';
import { Card } from './ui/Card.js';
import { Button } from './ui/Button.js';
import { Textarea } from './ui/Textarea.js';
import { Select } from './ui/Select.js';
import { WandSparklesIcon } from './icons.js';
import {
  artisticStyles,
  lightingStyles,
  moodStyles,
  colorPalettes,
  compositionExamples,
  aspectRatios,
  numberOfImagesOptions,
} from '../types.js';

const initialFormData = {
  mainPrompt: 'An epic space wizard casting a cosmic spell, planets and nebulae swirling around him, intricate details on his robe',
  negativePrompt: 'blurry, low quality, cartoonish, watermark, signature',
  artisticStyle: artisticStyles[0],
  lightingStyle: lightingStyles[1],
  moodStyle: moodStyles[0],
  colorPalette: colorPalettes[0],
  compositionExample: compositionExamples[1],
  aspectRatio: aspectRatios[0],
  numberOfImages: '1',
};

export default function StoryForm({ isGenerating, onGenerate }) {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <WandSparklesIcon className="w-6 h-6 text-fuchsia-400" />
          Create Your Vision
        </h2>

        <div>
          <label htmlFor="mainPrompt" className="block text-sm font-medium text-gray-300 mb-2">Main Prompt</label>
          <Textarea
            id="mainPrompt"
            name="mainPrompt"
            value={formData.mainPrompt}
            onChange={handleChange}
            placeholder="e.g., A floating castle in a sea of clouds"
            rows="4"
            required
            aria-label="Main Prompt"
          />
        </div>

        <div>
          <label htmlFor="negativePrompt" className="block text-sm font-medium text-gray-300 mb-2">Negative Prompt (Optional)</label>
          <Textarea
            id="negativePrompt"
            name="negativePrompt"
            value={formData.negativePrompt}
            onChange={handleChange}
            placeholder="e.g., ugly, deformed, extra limbs"
            rows="2"
            aria-label="Negative Prompt"
          />
        </div>
        
        <div className="border-t border-white/10 pt-4">
          <h3 className="text-lg font-semibold text-white mb-4">Art Direction & Variance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
            <Select label="Artistic Style" name="artisticStyle" value={formData.artisticStyle} onChange={handleChange} options={artisticStyles} />
            <Select label="Lighting Style" name="lightingStyle" value={formData.lightingStyle} onChange={handleChange} options={lightingStyles} />
            <Select label="Mood" name="moodStyle" value={formData.moodStyle} onChange={handleChange} options={moodStyles} />
            <Select label="Color Palette" name="colorPalette" value={formData.colorPalette} onChange={handleChange} options={colorPalettes} />
            <Select label="Composition" name="compositionExample" value={formData.compositionExample} onChange={handleChange} options={compositionExamples} />
            <Select label="Aspect Ratio" name="aspectRatio" value={formData.aspectRatio} onChange={handleChange} options={aspectRatios} />
            <Select label="Number of Images" name="numberOfImages" value={formData.numberOfImages} onChange={handleChange} options={numberOfImagesOptions} />
          </div>
        </div>

        <Button type="submit" disabled={isGenerating}>
          {isGenerating ? 'Creating...' : 'Create Masterpiece'}
        </Button>
      </form>
    </Card>
  );
}