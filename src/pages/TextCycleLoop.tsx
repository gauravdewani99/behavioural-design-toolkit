import React from "react";
import { ArrowLeft } from "lucide-react";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { CopyPromptButton } from "@/components/CopyPromptButton";
interface TextCycleLoopProps {
  simplifiedView?: boolean;
}
const TextCycleLoop: React.FC<TextCycleLoopProps> = ({
  simplifiedView = false
}) => {
  if (simplifiedView) {
    return <div className="w-full max-w-3xl mx-auto">
        <div className="grid gap-6">
          <div className="bg-secondary/20 p-8 glass-morphism relative rounded-lg">
            <CopyPromptButton prompt={`You are given a task to integrate an existing React component in the codebase

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

import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedWordCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedWordCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedWordCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  // Get the width of the current word
  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        // Add a small buffer (10px) to prevent text wrapping
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(\`\${newWidth}px\`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  // Container animation for the whole word
  const containerVariants = {
    hidden: { 
      y: -20,
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: { 
        duration: 0.3, 
        ease: "easeIn"
      }
    },
  };

  return (
    <>
      {/* Hidden measurement div with all words rendered */}
      <div 
        ref={measureRef} 
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={\`font-bold \${className}\`}>
            {word}
          </span>
        ))}
      </div>

      {/* Visible animated word */}
      <motion.span 
        className="relative inline-block"
        animate={{ 
          width,
          transition: { 
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={\`inline-block font-bold \${className}\`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
} 

demo.tsx
"use client";

import * as React from "react"
import AnimatedWordCycle from "@/components/ui/animated-text-cycle"

export function AuroraBackgroundDemo() {
  return (
    <div className="p-4 max-w-[500px]">
        <h1 className="text-4xl font-light text-left text-muted-foreground">
            Your <AnimatedWordCycle 
                words={[
                    "business",
                    "team",
                    "workflow",
                    "productivity",
                    "projects",
                    "analytics",
                    "dashboard",
                    "platform"
                ]}
                interval={3000}
                className={"text-foreground font-semi-bold"} 
            /> deserves better tools
        </h1>
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
 3. Use lucide-react icons for svgs or logos if component requires them`} previewText="Prompt: Create an animated background with text that cycles through different words..." />
            <AuroraBackgroundDemo />
          </div>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <div className="container py-8">
        <a href="/" className="flex items-center text-primary hover:text-primary/80 mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </a>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Text Cycle Loop</h1>
        
        {/* Moved the AuroraBackgroundDemo to the top, right after the title */}
        <div className="bg-secondary/20 rounded-lg p-8 glass-morphism relative mb-10">
          <AuroraBackgroundDemo />
        </div>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Text cycle animations provide a dynamic way to present multiple options in limited space.
            This component smoothly transitions between different words or phrases, enhancing visual interest
            while maintaining readability.
          </p>
        </div>
        
        <div className="grid gap-10">
          <div className="bg-secondary/20 rounded-lg p-8 glass-morphism relative">
            <CopyPromptButton prompt={`You are given a task to integrate an existing React component in the codebase

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

import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedWordCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedWordCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedWordCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  // Get the width of the current word
  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        // Add a small buffer (10px) to prevent text wrapping
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(\`\${newWidth}px\`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  // Container animation for the whole word
  const containerVariants = {
    hidden: { 
      y: -20,
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: { 
        duration: 0.3, 
        ease: "easeIn"
      }
    },
  };

  return (
    <>
      {/* Hidden measurement div with all words rendered */}
      <div 
        ref={measureRef} 
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={\`font-bold \${className}\`}>
            {word}
          </span>
        ))}
      </div>

      {/* Visible animated word */}
      <motion.span 
        className="relative inline-block"
        animate={{ 
          width,
          transition: { 
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={\`inline-block font-bold \${className}\`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
} 

demo.tsx
"use client";

import * as React from "react"
import AnimatedWordCycle from "@/components/ui/animated-text-cycle"

export function AuroraBackgroundDemo() {
  return (
    <div className="p-4 max-w-[500px]">
        <h1 className="text-4xl font-light text-left text-muted-foreground">
            Your <AnimatedWordCycle 
                words={[
                    "business",
                    "team",
                    "workflow",
                    "productivity",
                    "projects",
                    "analytics",
                    "dashboard",
                    "platform"
                ]}
                interval={3000}
                className={"text-foreground font-semi-bold"} 
            /> deserves better tools
        </h1>
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
 3. Use lucide-react icons for svgs or logos if component requires them`} previewText="Prompt: Create an animated background with text that cycles through different words..." />
            <div className="p-8">
              <div className="flex flex-col gap-6">
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
                  Text cycling creates focused attention through motion and cognitive novelty. Words that change draw 20% more attention than static text. [Nielsen Norman Group].
                  Use this pattern to highlight multiple benefits, features, or product variations efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TextCycleLoop;