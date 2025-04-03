
import React from 'react';
import { PromptInputWithActions } from '../components/PromptInputDemo';
import { AIVoiceInputDemo } from '../components/AIVoiceInputDemo';
import { Card } from '@/components/ui/card';

const ConversationalInput: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Conversational Input</h1>
          <p className="text-muted-foreground max-w-3xl">
            Modern interfaces are evolving beyond traditional forms and buttons. With the rise of Large Language Models (LLMs), 
            conversational UIs are becoming the interface of choice, offering more intuitive, human-like interactions that 
            reduce cognitive load and increase engagement.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism">
            <h2 className="text-2xl font-semibold mb-6">Text Input</h2>
            <p className="text-muted-foreground mb-6">
              Natural language text input allows users to communicate their intent in their own words, 
              breaking free from rigid form structures and predefined commands.
            </p>
            <div className="flex justify-center">
              <PromptInputWithActions />
            </div>
          </Card>
          
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism">
            <h2 className="text-2xl font-semibold mb-6">Voice Input</h2>
            <p className="text-muted-foreground mb-6">
              Voice interfaces reduce friction even further, enabling hands-free interaction and accessibility
              for users across different abilities and contexts.
            </p>
            <AIVoiceInputDemo />
          </Card>
        </div>
        
        <div className="mt-8 max-w-3xl">
          <h3 className="text-xl font-semibold mb-4">Why Conversational UI is the Future</h3>
          <p className="text-muted-foreground mb-4">
            As AI capabilities grow, conversational interfaces are becoming more powerful, understanding nuanced requests
            and handling complex tasks through natural dialogue. They adapt to users rather than forcing users to adapt to them.
          </p>
          <p className="text-muted-foreground mb-4">
            Implementing modern conversational UIs gives applications a competitive edge by providing more personalized, 
            accessible and efficient user experiences aligned with how humans naturally communicate.
          </p>
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
