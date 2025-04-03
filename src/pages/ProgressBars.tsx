
import React from 'react';
import StepperDemo from '../components/StepperDemo';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface ProgressBarsProps {
  simplifiedView?: boolean;
}

const ProgressBars: React.FC<ProgressBarsProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <Card className="p-6 bg-secondary/20 border border-border glass-morphism">
          <StepperDemo />
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <a href="/" className="flex items-center text-primary hover:text-primary/80 mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </a>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Progress Bars</h1>
          <p className="text-muted-foreground">
            Modern, interactive progress indicators to enhance user experience
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism">
            <h2 className="text-2xl font-semibold mb-6">Stepper Component</h2>
            <StepperDemo />
          </Card>
          
          {/* Additional progress bar examples could be added here */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
