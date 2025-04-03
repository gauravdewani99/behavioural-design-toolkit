
import React from 'react';
import StepperDemo from '../components/StepperDemo';
import { Card } from '@/components/ui/card';

const ProgressBars: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
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
        
        <div className="mt-8">
          <a 
            href="/" 
            className="inline-flex items-center text-primary hover:underline"
          >
            &larr; Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
