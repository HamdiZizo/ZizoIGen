import { GoogleGenAI } from '@google/genai';
import type { ImageFormData } from '../types.js';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateImage(formData: ImageFormData) {
  const { 
    mainPrompt, 
    negativePrompt, 
    artisticStyle, 
    lightingStyle, 
    moodStyle, 
    colorPalette, 
    compositionExample,
    aspectRatio,
    numberOfImages,
  } = formData;

  // New, more structured prompt for clearer instructions to the AI
  const enhancedPrompt = `
    **Subject:** ${mainPrompt.trim()}

    **Style:** ${artisticStyle}.
    **Lighting:** ${lightingStyle}.
    **Mood & Atmosphere:** ${moodStyle}.
    **Color Palette:** ${colorPalette}.
    **Composition:** ${compositionExample}.
    
    **Negative Prompt (Do NOT include):** ${negativePrompt.trim() || 'None'}.

    **Quality Keywords:** Masterpiece, 8k, ultra-detailed, high contrast, sharp focus, professional quality.
  `;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: enhancedPrompt,
      config: {
        numberOfImages: parseInt(numberOfImages, 10),
        outputMimeType: 'image/jpeg',
        aspectRatio: aspectRatio,
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("The API did not return any images. The prompt might have been blocked by safety filters.");
    }
    
    const images = response.generatedImages.map(img => img.image.imageBytes);

    return { images, finalPrompt: enhancedPrompt };

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Re-throw a more user-friendly error message
    throw new Error(error.message || 'An unknown error occurred while generating the image. Please check the console for details.');
  }
}