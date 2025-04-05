
import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyPromptButton } from "@/components/CopyPromptButton";

interface VisualSalienceProps {
  simplifiedView?: boolean;
}

const VisualSalience: React.FC<VisualSalienceProps> = ({
  simplifiedView = false
}) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="grid gap-6">
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism">
            <h2 className="text-xl font-semibold mb-4">Visual Salience Techniques</h2>
            <p className="text-muted-foreground mb-6">
              Explore specialized components that draw attention and create visual interest
            </p>
            <div className="grid gap-4">
              <Button variant="outline" className="justify-between w-full" asChild>
                <a href="/spotlight-text">
                  Spotlight Text
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="justify-between w-full" asChild>
                <a href="/cycle-text">
                  Cycle Text
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <a href="/" className="flex items-center text-primary hover:text-primary/80 mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </a>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Visual Salience</h1>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Visual salience in UI design refers to the prominence or noticeability of elements. 
            These components demonstrate animations that draw attention through 
            subtle motion and create visual interest.
          </p>
        </div>
        
        <div className="grid gap-10">
          <Card className="p-8 bg-secondary/20 border border-border glass-morphism">
            <h2 className="text-2xl font-semibold mb-6">Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border/50 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-medium mb-3">Spotlight Text</h3>
                <p className="text-muted-foreground mb-6">
                  A lamp-like spotlight animation that creates a soft glow around text,
                  drawing attention to important content.
                </p>
                <Button className="w-full" asChild>
                  <a href="/spotlight-text">View Component</a>
                </Button>
              </Card>
              
              <Card className="p-6 border border-border/50 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-medium mb-3">Cycle Text</h3>
                <p className="text-muted-foreground mb-6">
                  An animated text component that cycles through different words with
                  smooth, attention-grabbing transitions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/cycle-text">View Component</a>
                </Button>
              </Card>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 bg-card p-6 rounded-lg border border-border">
          <h2 className="text-xl font-semibold mb-4">Implementation Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Uses Framer Motion for smooth, physics-based animations</li>
            <li>Implements attention-grabbing visual techniques based on cognitive psychology</li>
            <li>Creates focal points through contrast, motion, and emphasis</li>
            <li>Responsive layout adapts to different screen sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisualSalience;
