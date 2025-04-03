
import React from 'react';
import { Card } from '@/components/ui/card';
import ThemeToggleDemo from '../components/ThemeToggleDemo';

const ThemeTogglePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Theme Toggle</h1>
          <p className="text-muted-foreground">
            Seamless theme switching with a visually appealing toggle component
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism">
            <h2 className="text-2xl font-semibold mb-6">Theme Toggle Component</h2>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground">
                This toggle demonstrates a smooth transition between light and dark themes, providing users with a seamless way to customize their experience based on preference or environmental conditions.
              </p>
              <div className="py-4">
                <ThemeToggleDemo />
              </div>
              <p className="text-sm text-muted-foreground">
                The toggle uses a combination of animations and state management to create a polished, interactive user experience.
              </p>
            </div>
          </Card>
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

export default ThemeTogglePage;
