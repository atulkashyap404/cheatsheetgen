import { AlertCircle } from 'lucide-react';

interface CheatSheetErrorProps {
  message: string;
}

export function CheatSheetError({ message }: CheatSheetErrorProps) {
  return (
    <div className="p-4 mb-4 border border-destructive/50 rounded-lg bg-destructive/10 text-destructive flex items-center gap-2">
      <AlertCircle className="h-4 w-4" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}