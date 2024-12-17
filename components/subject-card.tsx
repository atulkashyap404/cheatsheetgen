'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Subject } from "@/lib/subjects";
import { useRouter } from "next/navigation";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const router = useRouter();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{subject.name}</CardTitle>
        <CardDescription>{subject.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={() => router.push(`/generate/${subject.id}`)}
          className="w-full"
        >
          Generate Cheat Sheet
        </Button>
      </CardContent>
    </Card>
  );
}