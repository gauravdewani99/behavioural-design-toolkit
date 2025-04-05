
import React from "react";
import { ArrowLeft } from "lucide-react";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { CopyPromptButton } from "@/components/CopyPromptButton";

interface CycleTextProps {
  simplifiedView?: boolean;
}

const CycleText: React.FC<CycleTextProps> = ({
  simplifiedView = false
}) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-secondary/20 rounded-lg p-8 glass-morphism relative">
          <CopyPromptButton 
            prompt="Create an animated background with text that cycles through different words related to business (team, workflow, productivity, etc.) with smooth transitions between each word."
            previewText="Prompt: Create an animated background with text that cycles through different words..."
          />
          <div className="flex items-center justify-center max-h-[80vh]">
            <AuroraBackgroundDemo />
          </div>
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Cycle Text</h1>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Animated text transitions create visual interest and draw attention to key messages,
            making content more engaging and memorable.
          </p>
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 glass-morphism relative flex flex-col items-center justify-center h-auto">
          <CopyPromptButton 
            prompt="Create an animated background with text that cycles through different words related to business (team, workflow, productivity, etc.) with smooth transitions between each word."
            previewText="Prompt: Create an animated background with text that cycles through different words..."
          />
          <div className="max-h-[80vh] flex items-center justify-center py-16">
            <AuroraBackgroundDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CycleText;
