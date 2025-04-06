import React from "react";
import { ArrowLeft } from "lucide-react";
import { PromptInputDemo } from "@/components/PromptInputDemo";
import { AIVoiceInputDemo } from "@/components/AIVoiceInputDemo";
import { CopyPromptButton } from "@/components/CopyPromptButton";

interface ConversationalInputProps {
  simplifiedView?: boolean;
}

const ConversationalInput: React.FC<ConversationalInputProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <a href="/" className="flex items-center text-primary hover:text-primary/80 mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </a>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">AI Conversational Input</h1>
        
        <div className="bg-background/50 rounded-lg p-4 mb-6 text-sm text-muted-foreground">
          <p className="mb-1">Conversational interfaces reduce cognitive load by allowing users to interact naturally. Studies show natural language interfaces can decrease task completion time by up to 40%.</p>
          <p>AI input methods create a sense of presence and responsiveness that increases user trust and willingness to share information.</p>
        </div>
        
        <div className="flex flex-col gap-6 mb-6 max-w-2xl mx-auto">
          <div className="bg-secondary/20 rounded-lg p-6 glass-morphism relative">
            <CopyPromptButton 
              prompt="Create a modern chat interface with support for text input and file attachments."
              previewText="Prompt: Create a modern chat interface with text input and attachments..."
            />
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-xl font-medium">Text-Based Conversation</h2>
              <PromptInputDemo />
              <p className="text-sm text-muted-foreground max-w-md text-center">
                This component provides a modern chat interface with support for text input and file attachments. 
                Try typing a message and submitting it with the button or by pressing Enter.
              </p>
            </div>
          </div>

          <div className="bg-secondary/20 rounded-lg p-6 glass-morphism relative">
            <CopyPromptButton 
              prompt={`You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
\`\`\`tsx
component.tsx
"use client"

import { Mic } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AIVoiceInputProps {
  onStart?: () => void;
  onStop?: (duration: number) => void;
  visualizerBars?: number;
  demoMode?: boolean;
  demoInterval?: number;
  className?: string;
}

export function AIVoiceInput({
  onStart,
  onStop,
  visualizerBars = 48,
  demoMode = false,
  demoInterval = 3000,
  className
}: AIVoiceInputProps) {
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isDemo, setIsDemo] = useState(demoMode);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (submitted) {
      onStart?.();
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      onStop?.(time);
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [submitted, time, onStart, onStop]);

  useEffect(() => {
    if (!isDemo) return;

    let timeoutId: NodeJS.Timeout;
    const runAnimation = () => {
      setSubmitted(true);
      timeoutId = setTimeout(() => {
        setSubmitted(false);
        timeoutId = setTimeout(runAnimation, 1000);
      }, demoInterval);
    };

    const initialTimeout = setTimeout(runAnimation, 100);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
    };
  }, [isDemo, demoInterval]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins.toString().padStart(2, "0")}:\${secs.toString().padStart(2, "0")}\`;
  };

  const handleClick = () => {
    if (isDemo) {
      setIsDemo(false);
      setSubmitted(false);
    } else {
      setSubmitted((prev) => !prev);
    }
  };

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center transition-colors",
            submitted
              ? "bg-none"
              : "bg-none hover:bg-black/10 dark:hover:bg-white/10"
          )}
          type="button"
          onClick={handleClick}
        >
          {submitted ? (
            <div
              className="w-6 h-6 rounded-sm animate-spin bg-black dark:bg-white cursor-pointer pointer-events-auto"
              style={{ animationDuration: "3s" }}
            />
          ) : (
            <Mic className="w-6 h-6 text-black/70 dark:text-white/70" />
          )}
        </button>

        <span
          className={cn(
            "font-mono text-sm transition-opacity duration-300",
            submitted
              ? "text-black/70 dark:text-white/70"
              : "text-black/30 dark:text-white/30"
          )}
        >
          {formatTime(time)}
        </span>

        <div className="h-4 w-64 flex items-center justify-center gap-0.5">
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-300",
                submitted
                  ? "bg-black/50 dark:bg-white/50 animate-pulse"
                  : "bg-black/10 dark:bg-white/10 h-1"
              )}
              style={
                submitted && isClient
                  ? {
                      height: \`\${20 + Math.random() * 80}%\`,
                      animationDelay: \`\${i * 0.05}s\`,
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <p className="h-4 text-xs text-black/70 dark:text-white/70">
          {submitted ? "Listening..." : "Click to speak"}
        </p>
      </div>
    </div>
  );
}

demo.tsx
import { AIVoiceInput } from "@/components/ui/ai-voice-input";
import { useState } from "react";

export function AIVoiceInputDemo() {
  const [recordings, setRecordings] = useState<{ duration: number; timestamp: Date }[]>([]);

  const handleStop = (duration: number) => {
    setRecordings(prev => [...prev.slice(-4), { duration, timestamp: new Date() }]);
  };

  return (
    <div className="space-y-8">
        <div className="space-y-4">
          <AIVoiceInput 
            onStart={() => console.log('Recording started')}
            onStop={handleStop}
          />   
      </div>
    </div>
  );
}
\`\`\`

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them`}
              previewText="Prompt: Create a voice input interface with animated waveform..."
            />
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-xl font-medium">Voice-Based Conversation</h2>
              <AIVoiceInputDemo />
              <p className="text-sm text-muted-foreground max-w-md text-center">
                A voice input interface that visualizes audio input with an animated waveform.
                Click the microphone to start and stop recording.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationalInput;
