
import React from "react";
import { ArrowLeft } from "lucide-react";
import { PromptInputDemo } from "@/components/PromptInputDemo";
import { AIVoiceInputDemo } from "@/components/AIVoiceInputDemo";

interface ConversationalInputProps {
  simplifiedView?: boolean;
}

const ConversationalInput: React.FC<ConversationalInputProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-secondary/20 rounded-lg p-6 glass-morphism">
          <PromptInputDemo />
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
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Conversational interfaces make interactions with applications feel more natural and intuitive. 
            These components demonstrate different ways users can engage in conversation with AI systems.
          </p>
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl font-medium">Text-Based Conversation</h2>
            <div className="w-full flex justify-center">
              <PromptInputDemo />
            </div>
            <p className="text-sm text-muted-foreground max-w-lg text-center">
              This component provides a modern chat interface with support for text input and file attachments. 
              Try typing a message and submitting it with the button or by pressing Enter.
            </p>
          </div>
        </div>

        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl font-medium">Voice-Based Conversation</h2>
            <AIVoiceInputDemo />
            <p className="text-sm text-muted-foreground max-w-lg text-center">
              A voice input interface that visualizes audio input with an animated waveform.
              Click the microphone to start and stop recording.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationalInput;
