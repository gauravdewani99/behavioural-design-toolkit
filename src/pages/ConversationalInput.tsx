
import React from "react";
import { ArrowLeft } from "lucide-react";
import { PromptInputDemo } from "@/components/PromptInputDemo";
import { AIVoiceInputDemo } from "@/components/AIVoiceInputDemo";
import { CopyPromptButton } from "@/components/CopyPromptButton";

interface ConversationalInputProps {
  simplifiedView?: boolean;
}

const ConversationalInput: React.FC<ConversationalInputProps> = ({ simplifiedView = false }) => {
  // Text input prompt content
  const textPrompt = `Create a React component with a customizable text input that has a clean, minimal design with rounded corners, and includes a send button. Add hover and focus effects for better user experience.`;

  // Voice input prompt content
  const voicePrompt = `Create a React component for voice input with a microphone button that animates when recording, displays a timer, and shows a visualizer with animated bars when active.`;

  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="bg-secondary/20 rounded-lg p-6 glass-morphism relative">
            <CopyPromptButton prompt={textPrompt} />
            <PromptInputDemo />
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-6 glass-morphism relative">
            <CopyPromptButton prompt={voicePrompt} />
            <AIVoiceInputDemo />
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Conversational Input</h1>
        
        <div className="bg-background/80 p-4 mb-6 rounded text-sm text-muted-foreground">
          <p>Conversational interfaces leverage natural language processing to reduce cognitive load and friction in human-computer interaction.</p>
          <p>Research shows that chatbot-style interfaces can increase form completion rates by 31% compared to traditional forms by making interactions feel more personal.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div className="bg-secondary/20 rounded-lg p-8 glass-morphism relative flex flex-col items-center">
            <CopyPromptButton prompt={textPrompt} />
            <h2 className="text-xl font-medium mb-8">Basic Text Input</h2>
            <PromptInputDemo />
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-8 glass-morphism relative flex flex-col items-center">
            <CopyPromptButton prompt={voicePrompt} />
            <h2 className="text-xl font-medium mb-8">Voice Interface</h2>
            <AIVoiceInputDemo />
          </div>
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

export default ConversationalInput;
