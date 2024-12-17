interface CheatSheetHeaderProps {
  topic: string;
}

export function CheatSheetHeader({ topic }: CheatSheetHeaderProps) {
  return (
    <h2 className="text-2xl font-bold mb-4 text-primary">
      {topic ? `${topic} Cheat Sheet` : 'Your Cheat Sheet'}
    </h2>
  );
}