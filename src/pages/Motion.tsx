
import React from "react";
import { ArrowLeft } from "lucide-react";
import { SplineSceneBasic } from "@/components/SplineSceneDemo";
import { CopyPromptButton } from "@/components/CopyPromptButton";

interface MotionProps {
  simplifiedView?: boolean;
}

const Motion: React.FC<MotionProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative">
          <CopyPromptButton 
            prompt="You are given a task to integrate an existing React component in the codebase\n\nThe codebase should support:\n- shadcn project structure  \n- Tailwind CSS\n- Typescript\n\nIf it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.\n\nDetermine the default path for components and styles. \nIf default path for components is not /components/ui, provide instructions on why it's important to create this folder\nCopy-paste this component to /components/ui folder:\ntsx\ncomponent.tsx\n'use client'\n\nimport { Suspense, lazy } from 'react'\nconst Spline = lazy(() => import('@splinetool/react-spline'))\n\ninterface SplineSceneProps {\n  scene: string\n  className?: string\n}\n\nexport function SplineScene({ scene, className }: SplineSceneProps) {\n  return (\n    <Suspense \n      fallback={\n        <div className=\"w-full h-full flex items-center justify-center\">\n          <span className=\"loader\"></span>\n        </div>\n      }\n    >\n      <Spline\n        scene={scene}\n        className={className}\n      />\n    </Suspense>\n  )\n}\n\ndemo.tsx\n'use client'\n\nimport { SplineScene } from \"@/components/ui/splite\";\nimport { Card } from \"@/components/ui/card\"\nimport { Spotlight } from \"@/components/ui/spotlight\"\n \nexport function SplineSceneBasic() {\n  return (\n    <Card className=\"w-full h-[500px] bg-black/[0.96] relative overflow-hidden\">\n      <Spotlight\n        className=\"-top-40 left-0 md:left-60 md:-top-20\"\n        fill=\"white\"\n      />\n      \n      <div className=\"flex h-full\">\n        {/* Left content */}\n        <div className=\"flex-1 p-8 relative z-10 flex flex-col justify-center\">\n          <h1 className=\"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\">\n            Interactive 3D\n          </h1>\n          <p className=\"mt-4 text-neutral-300 max-w-lg\">\n            Bring your UI to life with beautiful 3D scenes. Create immersive experiences \n            that capture attention and enhance your design.\n          </p>\n        </div>\n\n        {/* Right content */}\n        <div className=\"flex-1 relative\">\n          <SplineScene \n            scene=\"https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode\"\n            className=\"w-full h-full\"\n          />\n        </div>\n      </div>\n    </Card>\n  )\n}\n\n\nImplementation Guidelines\n 1. Analyze the component structure and identify all required dependencies\n 2. Review the component's argumens and state\n 3. Identify any required context providers or hooks and install them\n 4. Questions to Ask\n - What data/props will be passed to this component?\n - Are there any specific state management requirements?\n - Are there any required assets (images, icons, etc.)?\n - What is the expected responsive behavior?\n - What is the best place to use this component in the app?\n\nSteps to integrate\n 0. Copy paste all the code above in the correct directories\n 1. Install external dependencies\n 2. Fill image assets with Unsplash stock images you know exist\n 3. Use lucide-react icons for svgs or logos if component requires them\n\n\nAdditional important context to consider: Generate a moving car instead of a robot in the 3D animation\nRemember: Do not change the component's code unless it's required to integrate or the user asks you to.\nIMPORTANT: Create all mentioned files in full, without abbreviations. Do not use placeholders like \"insert the rest of the code here\" – output every line of code exactly as it is, so it can be copied and pasted directly into the project."
            previewText="Prompt: Create an interactive 3D scene component that adds depth and visual interest..."
          />
          <SplineSceneBasic />
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Motion</h1>
        
        <div className="mb-8">
          <p className="text-lg text-muted-foreground mb-6">
            Motion and 3D elements can significantly enhance your UI, creating more engaging and memorable experiences for users.
          </p>
          
          <div className="relative">
            <CopyPromptButton 
              prompt="You are given a task to integrate an existing React component in the codebase\n\nThe codebase should support:\n- shadcn project structure  \n- Tailwind CSS\n- Typescript\n\nIf it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.\n\nDetermine the default path for components and styles. \nIf default path for components is not /components/ui, provide instructions on why it's important to create this folder\nCopy-paste this component to /components/ui folder:\ntsx\ncomponent.tsx\n'use client'\n\nimport { Suspense, lazy } from 'react'\nconst Spline = lazy(() => import('@splinetool/react-spline'))\n\ninterface SplineSceneProps {\n  scene: string\n  className?: string\n}\n\nexport function SplineScene({ scene, className }: SplineSceneProps) {\n  return (\n    <Suspense \n      fallback={\n        <div className=\"w-full h-full flex items-center justify-center\">\n          <span className=\"loader\"></span>\n        </div>\n      }\n    >\n      <Spline\n        scene={scene}\n        className={className}\n      />\n    </Suspense>\n  )\n}\n\ndemo.tsx\n'use client'\n\nimport { SplineScene } from \"@/components/ui/splite\";\nimport { Card } from \"@/components/ui/card\"\nimport { Spotlight } from \"@/components/ui/spotlight\"\n \nexport function SplineSceneBasic() {\n  return (\n    <Card className=\"w-full h-[500px] bg-black/[0.96] relative overflow-hidden\">\n      <Spotlight\n        className=\"-top-40 left-0 md:left-60 md:-top-20\"\n        fill=\"white\"\n      />\n      \n      <div className=\"flex h-full\">\n        {/* Left content */}\n        <div className=\"flex-1 p-8 relative z-10 flex flex-col justify-center\">\n          <h1 className=\"text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400\">\n            Interactive 3D\n          </h1>\n          <p className=\"mt-4 text-neutral-300 max-w-lg\">\n            Bring your UI to life with beautiful 3D scenes. Create immersive experiences \n            that capture attention and enhance your design.\n          </p>\n        </div>\n\n        {/* Right content */}\n        <div className=\"flex-1 relative\">\n          <SplineScene \n            scene=\"https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode\"\n            className=\"w-full h-full\"\n          />\n        </div>\n      </div>\n    </Card>\n  )\n}\n\n\nImplementation Guidelines\n 1. Analyze the component structure and identify all required dependencies\n 2. Review the component's argumens and state\n 3. Identify any required context providers or hooks and install them\n 4. Questions to Ask\n - What data/props will be passed to this component?\n - Are there any specific state management requirements?\n - Are there any required assets (images, icons, etc.)?\n - What is the expected responsive behavior?\n - What is the best place to use this component in the app?\n\nSteps to integrate\n 0. Copy paste all the code above in the correct directories\n 1. Install external dependencies\n 2. Fill image assets with Unsplash stock images you know exist\n 3. Use lucide-react icons for svgs or logos if component requires them\n\n\nAdditional important context to consider: Generate a moving car instead of a robot in the 3D animation\nRemember: Do not change the component's code unless it's required to integrate or the user asks you to.\nIMPORTANT: Create all mentioned files in full, without abbreviations. Do not use placeholders like \"insert the rest of the code here\" – output every line of code exactly as it is, so it can be copied and pasted directly into the project."
              previewText="Prompt: Create an interactive 3D scene component that adds depth and visual interest..."
            />
            <SplineSceneBasic />
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border mt-12">
          <h2 className="text-xl font-semibold mb-4">Implementation Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Uses Spline for 3D scenes with React Suspense for lazy loading</li>
            <li>Responsive layout with stacking on mobile</li>
            <li>Spotlight effect adds depth and visual interest</li>
            <li>Custom gradient text for enhanced visual hierarchy</li>
            <li>Card component used for consistent styling and borders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Motion;
