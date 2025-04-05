
import React from 'react';
import { Card } from '@/components/ui/card';
import ThemeToggleDemo from '../components/ThemeToggleDemo';
import { CopyPromptButton } from '@/components/CopyPromptButton';

interface ThemeTogglePageProps {
  simplifiedView?: boolean;
}

const ThemeTogglePage: React.FC<ThemeTogglePageProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <Card className="p-6 bg-secondary/20 border border-border glass-morphism flex justify-center relative">
          <CopyPromptButton 
            prompt="You are given a task to integrate an existing React component in the codebase\n\nThe codebase should support:\n- shadcn project structure  \n- Tailwind CSS\n- Typescript\n\nIf it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.\n\nDetermine the default path for components and styles. \nIf default path for components is not /components/ui, provide instructions on why it's important to create this folder\nCopy-paste this component to /components/ui folder:\ntsx\ncomponent.tsx\n\"use client\"\n\nimport { useState } from \"react\"\nimport { Moon, Sun } from \"lucide-react\"\nimport { cn } from \"@/lib/utils\"\n\ninterface ThemeToggleProps {\n  className?: string\n}\n\nexport function ThemeToggle({ className }: ThemeToggleProps) {\n  const [isDark, setIsDark] = useState(true)\n\n  // next-themes\n  // const { resolvedTheme, setTheme } = useTheme()\n  // const isDark = resolvedTheme === \"dark\"\n  // onClick={() => setTheme(isDark ? \"light\" : \"dark\")}\n\n  return (\n    <div\n      className={cn(\n        \"flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300\",\n        isDark \n          ? \"bg-zinc-950 border border-zinc-800\" \n          : \"bg-white border border-zinc-200\",\n        className\n      )}\n      onClick={() => setIsDark(!isDark)}\n      role=\"button\"\n      tabIndex={0}\n    >\n      <div className=\"flex justify-between items-center w-full\">\n        <div\n          className={cn(\n            \"flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300\",\n            isDark \n              ? \"transform translate-x-0 bg-zinc-800\" \n              : \"transform translate-x-8 bg-gray-200\"\n          )}\n        >\n          {isDark ? (\n            <Moon \n              className=\"w-4 h-4 text-white\" \n              strokeWidth={1.5}\n            />\n          ) : (\n            <Sun \n              className=\"w-4 h-4 text-gray-700\" \n              strokeWidth={1.5}\n            />\n          )}\n        </div>\n        <div\n          className={cn(\n            \"flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300\",\n            isDark \n              ? \"bg-transparent\" \n              : \"transform -translate-x-8\"\n          )}\n        >\n          {isDark ? (\n            <Sun \n              className=\"w-4 h-4 text-gray-500\" \n              strokeWidth={1.5}\n            />\n          ) : (\n            <Moon \n              className=\"w-4 h-4 text-black\" \n              strokeWidth={1.5}\n            />\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}\n\ndemo.tsx\nimport { ThemeToggle } from \"@/components/ui/theme-toggle\"\n\nfunction DefaultToggle() {\n  return (\n    <div className=\"space-y-2 text-center\">\n      <div className=\"flex justify-center\">\n        <ThemeToggle />\n      </div>\n    </div>\n  )\n}\n\nexport { DefaultToggle }\n\n\nImplementation Guidelines\n 1. Analyze the component structure and identify all required dependencies\n 2. Review the component's argumens and state\n 3. Identify any required context providers or hooks and install them\n 4. Questions to Ask\n - What data/props will be passed to this component?\n - Are there any specific state management requirements?\n - Are there any required assets (images, icons, etc.)?\n - What is the expected responsive behavior?\n - What is the best place to use this component in the app?\n\nSteps to integrate\n 0. Copy paste all the code above in the correct directories\n 1. Install external dependencies\n 2. Fill image assets with Unsplash stock images you know exist\n 3. Use lucide-react icons for svgs or logos if component requires them\n\n\nAdditional important context to consider: Generate a moving car instead of a robot in the 3D animation\nRemember: Do not change the component's code unless it's required to integrate or the user asks you to.\nIMPORTANT: Create all mentioned files in full, without abbreviations. Do not use placeholders like \"insert the rest of the code here\" – output every line of code exactly as it is, so it can be copied and pasted directly into the project."
            previewText="Prompt: Create a theme toggle component with smooth animation..."
          />
          <ThemeToggleDemo />
        </Card>
      </div>
    );
  }

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
          <Card className="p-6 bg-secondary/20 border border-border glass-morphism relative">
            <CopyPromptButton 
              prompt="You are given a task to integrate an existing React component in the codebase\n\nThe codebase should support:\n- shadcn project structure  \n- Tailwind CSS\n- Typescript\n\nIf it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.\n\nDetermine the default path for components and styles. \nIf default path for components is not /components/ui, provide instructions on why it's important to create this folder\nCopy-paste this component to /components/ui folder:\ntsx\ncomponent.tsx\n\"use client\"\n\nimport { useState } from \"react\"\nimport { Moon, Sun } from \"lucide-react\"\nimport { cn } from \"@/lib/utils\"\n\ninterface ThemeToggleProps {\n  className?: string\n}\n\nexport function ThemeToggle({ className }: ThemeToggleProps) {\n  const [isDark, setIsDark] = useState(true)\n\n  // next-themes\n  // const { resolvedTheme, setTheme } = useTheme()\n  // const isDark = resolvedTheme === \"dark\"\n  // onClick={() => setTheme(isDark ? \"light\" : \"dark\")}\n\n  return (\n    <div\n      className={cn(\n        \"flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300\",\n        isDark \n          ? \"bg-zinc-950 border border-zinc-800\" \n          : \"bg-white border border-zinc-200\",\n        className\n      )}\n      onClick={() => setIsDark(!isDark)}\n      role=\"button\"\n      tabIndex={0}\n    >\n      <div className=\"flex justify-between items-center w-full\">\n        <div\n          className={cn(\n            \"flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300\",\n            isDark \n              ? \"transform translate-x-0 bg-zinc-800\" \n              : \"transform translate-x-8 bg-gray-200\"\n          )}\n        >\n          {isDark ? (\n            <Moon \n              className=\"w-4 h-4 text-white\" \n              strokeWidth={1.5}\n            />\n          ) : (\n            <Sun \n              className=\"w-4 h-4 text-gray-700\" \n              strokeWidth={1.5}\n            />\n          )}\n        </div>\n        <div\n          className={cn(\n            \"flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300\",\n            isDark \n              ? \"bg-transparent\" \n              : \"transform -translate-x-8\"\n          )}\n        >\n          {isDark ? (\n            <Sun \n              className=\"w-4 h-4 text-gray-500\" \n              strokeWidth={1.5}\n            />\n          ) : (\n            <Moon \n              className=\"w-4 h-4 text-black\" \n              strokeWidth={1.5}\n            />\n          )}\n        </div>\n      </div>\n    </div>\n  )\n}\n\ndemo.tsx\nimport { ThemeToggle } from \"@/components/ui/theme-toggle\"\n\nfunction DefaultToggle() {\n  return (\n    <div className=\"space-y-2 text-center\">\n      <div className=\"flex justify-center\">\n        <ThemeToggle />\n      </div>\n    </div>\n  )\n}\n\nexport { DefaultToggle }\n\n\nImplementation Guidelines\n 1. Analyze the component structure and identify all required dependencies\n 2. Review the component's argumens and state\n 3. Identify any required context providers or hooks and install them\n 4. Questions to Ask\n - What data/props will be passed to this component?\n - Are there any specific state management requirements?\n - Are there any required assets (images, icons, etc.)?\n - What is the expected responsive behavior?\n - What is the best place to use this component in the app?\n\nSteps to integrate\n 0. Copy paste all the code above in the correct directories\n 1. Install external dependencies\n 2. Fill image assets with Unsplash stock images you know exist\n 3. Use lucide-react icons for svgs or logos if component requires them\n\n\nAdditional important context to consider: Generate a moving car instead of a robot in the 3D animation\nRemember: Do not change the component's code unless it's required to integrate or the user asks you to.\nIMPORTANT: Create all mentioned files in full, without abbreviations. Do not use placeholders like \"insert the rest of the code here\" – output every line of code exactly as it is, so it can be copied and pasted directly into the project."
              previewText="Prompt: Create a theme toggle component with smooth animation..."
            />
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
