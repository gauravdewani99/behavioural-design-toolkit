
import React from "react";
import { ArrowLeft } from "lucide-react";
import { AvatarSocialProof } from "@/components/AvatarSocialProof";
import { CopyPromptButton } from "@/components/CopyPromptButton";

interface SocialProofingProps {
  simplifiedView?: boolean;
}

const SocialProofing: React.FC<SocialProofingProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
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
"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-[inherit] bg-secondary text-xs",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };


demo.tsx
function Component() {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-03.jpg"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-04.jpg"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-05.jpg"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-06.jpg"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Trusted by <strong className="font-medium text-foreground">60K+</strong> developers.
      </p>
    </div>
  );
}

export { Component };
\`\`\`

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
  - What is the expected responsive behaviour?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them`}
            previewText="Prompt: Create a social proof component with user avatars..."
          />
          <AvatarSocialProof />
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Social Proofing</h1>
        
        <div className="bg-background/80 p-4 mb-6 rounded text-sm text-muted-foreground">
          <p>Social proof leverages conformity bias, where people follow others' actions when uncertain about decisions.</p>
          <p>Studies show that displaying user counts and testimonials can increase conversion rates by up to 15% by reducing perceived risk.</p>
        </div>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Social proofing is a powerful psychological phenomenon where people follow the actions 
            of others, assuming those actions reflect correct behaviour. This component demonstrates 
            a simple yet effective social proof element showing user adoption.
          </p>
          
          <div className="bg-secondary/10 rounded-lg p-6 mt-6 border border-border/20">
            <h2 className="text-xl font-semibold mb-3">Why Testimonial Badges Matter</h2>
            <p className="mb-4">
              Testimonial badges leverage the psychological principle of social validation, demonstrating that others have already 
              trusted and benefited from your product or service. This creates an immediate sense of credibility and reduces 
              perceived risk for new users.
            </p>
            
            <h3 className="text-lg font-medium mb-2">How Testimonial Badges Improve Retention:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Trust Building:</strong> Users are more likely to trust a product that others visibly endorse, leading to higher initial engagement.</li>
              <li><strong>Reduced Decision Anxiety:</strong> The presence of existing satisfied users reduces the anxiety around making a commitment to your product.</li>
              <li><strong>Fear of Missing Out (FOMO):</strong> Seeing others already benefiting from your service creates a subtle fear of missing out that motivates continued use.</li>
              <li><strong>Strengthened Community Perception:</strong> Testimonial badges create the perception of joining an established community rather than taking a risk on an unknown product.</li>
              <li><strong>Increased Perceived Value:</strong> Products that others are using are perceived as more valuable, which helps justify continued subscription or usage.</li>
            </ul>
            
            <p className="mt-4 italic text-muted-foreground">
              Social proof elements tap into conformity bias, where users rely on others' actions to guide their own. Research indicates social validation increases conversion rates by 15-40% depending on implementation{" "}
              <a 
                href="https://www.researchgate.net/publication/8902776_Social_Influence_Compliance_and_Conformity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-primary transition-colors"
              >
                [1]
              </a>.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism relative">
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
"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-[inherit] bg-secondary text-xs",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };


demo.tsx
function Component() {
  return (
    <div className="flex items-center rounded-full border border-border bg-background p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-03.jpg"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-04.jpg"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-05.jpg"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-06.jpg"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Trusted by <strong className="font-medium text-foreground">60K+</strong> developers.
      </p>
    </div>
  );
}

export { Component };
\`\`\`

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behaviour?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them`}
            previewText="Prompt: Create a social proof component with user avatars..."
          />
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl font-medium">Basic Social Proof</h2>
            <AvatarSocialProof />
          </div>
        </div>

        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism relative">
          <CopyPromptButton 
            prompt="Create an enhanced social proof component that shows user avatars with a count and includes a call-to-action button."
            previewText="Prompt: Create an enhanced social proof component with CTA..."
          />
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl font-medium">Enhanced Social Proof</h2>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 rounded-lg border border-border p-4 w-full max-w-2xl">
              <AvatarSocialProof />
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Join them now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofing;
