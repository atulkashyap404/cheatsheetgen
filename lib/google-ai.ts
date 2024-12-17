import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyA1RR1lVlx-AaKLjdC4x5QmSZrGTyn-X18';

export class AIError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = 'AIError';
  }
}

export async function generateCheatSheet(topic: string) {
  if (!API_KEY) {
    throw new AIError('Google AI API key is not configured');
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Create a comprehensive and well-structured cheat sheet for ${topic}. Format the response using the following structure:

# ${topic} Cheat Sheet

## 1. Key Concepts
${Array(5).fill('').map((_, i) => `${i + 1}. [Concept Name]
   - Brief explanation
   - Key points`).join('\n\n')}

## 2. Syntax and Usage
${Array(5).fill('').map((_, i) => `${i + 1}. [Example Name]
   \`\`\`
   Code or syntax example
   \`\`\`
   - Explanation
   - Use case`).join('\n\n')}

## 3. Best Practices
${Array(3).fill('').map((_, i) => `${i + 1}. [Practice Name]
   - Why it's important
   - How to implement
   - Common pitfalls`).join('\n\n')}

## 4. Quick Reference
- Common commands
- Frequently used patterns
- Important terminology

Please replace the placeholders with relevant content for ${topic} and ensure the formatting is consistent.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('AI Generation Error:', error);
    throw new AIError('Failed to generate cheat sheet. Please try again.', error);
  }
}