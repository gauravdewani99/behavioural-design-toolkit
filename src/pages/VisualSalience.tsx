
import React from "react";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { ArrowLeft } from "lucide-react";
import { LampDemo } from "@/components/LampDemo";

const VisualSalience: React.FC = () => {
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
            This component demonstrates a word cycling animation that draws attention through 
            subtle motion and creates visual interest.
          </p>
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <AuroraBackgroundDemo />
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <LampDemo />
        </div>
      </div>
    </div>
  );
};

export default VisualSalience;
