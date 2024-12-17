import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: 'Templates - Ready-to-Use Cheat Sheet Templates',
  description: 'Browse our collection of professional cheat sheet templates. Find the perfect template for your learning needs.',
};

export default function TemplatesPage() {
  const templates = [
    {
      title: "Programming Languages",
      description: "Templates for Python, JavaScript, Java, and more",
      count: 15,
    },
    {
      title: "Frameworks & Libraries",
      description: "React, Angular, Vue.js, and other popular frameworks",
      count: 12,
    },
    {
      title: "Data Science",
      description: "Machine Learning, Statistics, and Data Analysis",
      count: 8,
    },
    {
      title: "DevOps & Tools",
      description: "Git, Docker, Kubernetes, and CI/CD pipelines",
      count: 10,
    },
    {
      title: "Design Patterns",
      description: "Common software design patterns and principles",
      count: 6,
    },
    {
      title: "Algorithms",
      description: "Common algorithms and data structures",
      count: 9,
    },
  ];

  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Ready-to-Use Templates
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start with our professionally designed templates and customize them to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <Card key={template.title} className="border-primary/20">
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {template.count} templates
                </span>
                <Button asChild>
                  <Link href={`/templates/${template.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Browse Templates
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}