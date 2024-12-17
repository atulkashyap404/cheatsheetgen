import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Download, Sparkles, Zap, Clock, Lock } from "lucide-react";

export const metadata = {
  title: 'Features - Create Professional Cheat Sheets with AI',
  description: 'Explore the powerful features of our AI-powered cheat sheet generator. Create, customize, and download professional learning resources instantly.',
};

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Generation",
      description: "Generate comprehensive cheat sheets instantly using advanced AI technology",
      icon: Wand2,
    },
    {
      title: "PDF Export",
      description: "Download your cheat sheets in PDF format for easy sharing and printing",
      icon: Download,
    },
    {
      title: "Custom Templates",
      description: "Choose from a variety of professional templates or create your own",
      icon: Sparkles,
    },
    {
      title: "Instant Results",
      description: "Get your cheat sheets in seconds, no waiting required",
      icon: Zap,
    },
    {
      title: "Version History",
      description: "Access and restore previous versions of your cheat sheets",
      icon: Clock,
    },
    {
      title: "Secure Storage",
      description: "Your cheat sheets are safely stored and encrypted",
      icon: Lock,
    },
  ];

  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Powerful Features for Better Learning
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to create professional cheat sheets and enhance your learning experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="border-primary/20">
            <CardHeader>
              <feature.icon className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}