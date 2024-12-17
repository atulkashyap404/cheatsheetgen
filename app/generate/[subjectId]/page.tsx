'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { subjects } from '@/lib/subjects';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GeneratePage() {
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  if (!subject) {
    return <div>Subject not found</div>;
  }

  const toggleSection = (sectionId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredSections = subject.sections.filter((section) =>
    selectedSections.includes(section.id)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to subjects
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">{subject.name} Cheat Sheet</h1>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select Sections</h2>
            {subject.sections.map((section) => (
              <div key={section.id} className="flex items-center space-x-2">
                <Checkbox
                  id={section.id}
                  checked={selectedSections.includes(section.id)}
                  onCheckedChange={() => toggleSection(section.id)}
                />
                <label
                  htmlFor={section.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {section.name}
                </label>
              </div>
            ))}
          </div>

          <Button className="mt-6" disabled={selectedSections.length === 0}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">{subject.name}</h2>
            <ScrollArea className="h-[600px] pr-4">
              {filteredSections.map((section) => (
                <div key={section.id} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {section.content}
                  </pre>
                </div>
              ))}
              {filteredSections.length === 0 && (
                <p className="text-muted-foreground text-center py-8">
                  Select sections to generate your cheat sheet
                </p>
              )}
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}