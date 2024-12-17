'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { CheatSheetPreview } from "@/components/cheat-sheet-preview";
import { Download, Wand2 } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import html2pdf from 'html2pdf.js';
import { generateCheatSheet, AIError } from '@/lib/google-ai';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedContent = await generateCheatSheet(topic);
      setContent(generatedContent);
    } catch (err) {
      const message = err instanceof AIError 
        ? err.message 
        : 'An unexpected error occurred. Please try again.';
      setError(message);
      console.error('Error generating content:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const element = document.getElementById('cheat-sheet');
    if (!element) return;

    const opt = {
      margin: [0.5, 0.5],
      filename: `${topic}-cheat-sheet.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        scrollY: -window.scrollY,
        windowHeight: document.documentElement.scrollHeight
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          AI Cheat Sheet Generator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Enter any topic and let AI create a comprehensive cheat sheet for you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <InputWithLabel
              label="Topic"
              value={topic}
              onChange={(value) => setTopic(value)}
              placeholder="Enter any topic (e.g., Python, React, Machine Learning)"
            />
          </div>
          <div className="flex items-end">
            <Button 
              onClick={handleGenerate}
              disabled={!topic || isLoading}
              className="bg-primary/90 hover:bg-primary"
            >
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </div>

        <div id="cheat-sheet">
          <CheatSheetPreview 
            content={content} 
            topic={topic} 
            isLoading={isLoading}
            error={error}
          />
        </div>

        {content && !error && (
          <div className="mt-6 text-center">
            <Button onClick={handleDownload} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}