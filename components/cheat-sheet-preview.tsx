'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/loading-spinner";
import { CheatSheetError } from "./cheat-sheet/cheat-sheet-error";
import { CheatSheetContent } from "./cheat-sheet/cheat-sheet-content";
import { CheatSheetHeader } from "./cheat-sheet/cheat-sheet-header";

interface CheatSheetPreviewProps {
  content: string;
  topic: string;
  isLoading?: boolean;
  error?: string | null;
}

export function CheatSheetPreview({ 
  content, 
  topic, 
  isLoading,
  error 
}: CheatSheetPreviewProps) {
  return (
    <Card className="p-6 bg-background/50 backdrop-blur-sm border-primary/20">
      <CheatSheetHeader topic={topic} />
      
      {error && <CheatSheetError message={error} />}
      
      {isLoading ? (
        <div className="flex items-center justify-center h-[400px]">
          <LoadingSpinner />
        </div>
      ) : (
        <CheatSheetContent content={content || 'Enter a topic and click Generate to create your cheat sheet...'} />
      )}
    </Card>
  );
}