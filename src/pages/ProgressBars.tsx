
import React from 'react';
import StepperDemo from '../components/StepperDemo';
import { Card } from '@/components/ui/card';
import { CopyPromptButton } from '@/components/CopyPromptButton';

interface ProgressBarsProps {
  simplifiedView?: boolean;
}

const ProgressBars: React.FC<ProgressBarsProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <Card className="p-6 bg-secondary/20 border border-border glass-morphism relative">
          <CopyPromptButton 
            prompt="Create a multi-step progress indicator component that shows users what step they're on in a process. Include previous/next buttons and clear visual indication of the current step."
            previewText="Prompt: Create a multi-step progress indicator component..."
          />
          <StepperDemo />
        </Card>
      </div>
    );
  }

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
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism relative">
            <CopyPromptButton 
              prompt="Create a multi-step progress indicator component that shows users what step they're on in a process. Include previous/next buttons and clear visual indication of the current step."
              previewText="Prompt: Create a multi-step progress indicator component..."
            />
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
