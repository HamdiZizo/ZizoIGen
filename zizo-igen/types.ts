export const artisticStyles = [
  'Dan Mumford’s Detailed Poster Art',
  'H.R. Giger’s Biomechanical Surrealism',
  'Graphic Novel Illustration',
  'Impressionistic Oil Painting',
  'Art Deco Architecture',
  'Japanese Ukiyo-e Woodblock',
  'Cyberpunk Anime Concept Art',
  'Photorealistic Fantasy',
  'Minimalist Vector Art',
];

export const lightingStyles = [
  'Volumetric Rays',
  'Neon Glow',
  'Golden Hour Sunlight',
  'Dramatic Rim Lighting',
  'Soft Diffused Studio Light',
  'Moonlit Night',
  'Cinematic Noir Shadows',
];

export const moodStyles = [
  'Epic & Heroic',
  'Cyberpunk Dystopia',
  'Mysterious & Ethereal',
  'Serene & Tranquil',
  'Whimsical & Dreamlike',
  'Dark & Ominous',
  'Nostalgic & Vintage',
];

export const colorPalettes = [
  'Synthwave Sunset',
  'Obsidian & Crimson',
  'Iridescent Pearl',
  'Autumnal Earth Tones',
  'Monochromatic Blues',
  'Vibrant Tropical',
  'Pastel Dreams',
];

export const compositionExamples = [
  'Worm’s-Eye View',
  'Cinematic Wide Shot',
  'Dutch Angle',
  'Symmetrical Centered',
  'Close-up Portrait',
  'Leading Lines',
  'Rule of Thirds',
];

export const aspectRatios = ['16:9', '1:1', '9:16', '4:3', '3:4'];

export const numberOfImagesOptions = ['1', '2', '4'];

export interface ImageFormData {
  mainPrompt: string;
  negativePrompt: string;
  artisticStyle: string;
  lightingStyle: string;
  moodStyle: string;
  colorPalette: string;
  compositionExample: string;
  aspectRatio: string;
  numberOfImages: string;
}

export interface Imagination {
  id: string;
  imageUrl: string;
  finalPrompt: string;
  formData: ImageFormData;
}

export type GenerationState = 'idle' | 'generating' | 'done' | 'error';