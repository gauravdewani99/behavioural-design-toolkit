
import React, { useState, lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Component definitions with descriptions
const components = [
  { 
    title: "Visual Salience", 
    link: "/visual-salience",
    description: "Techniques to draw attention to key elements through contrast, color, and emphasis."
  },
  { 
    title: "Motion", 
    link: "/motion",
    description: "Animation patterns that guide users and create a sense of orientation and hierarchy."
  },
  { 
    title: "Progress Bars", 
    link: "/progress-bars",
    description: "Visual indicators that show completion status and reduce anxiety during waiting periods."
  },
  { 
    title: "Conversational Input", 
    link: "/conversational-input",
    description: "Natural language interfaces that make complex interactions more intuitive and engaging."
  },
  { 
    title: "Theme Toggle", 
    link: "/theme-toggle",
    description: "Controls that allow users to personalize their experience through appearance settings."
  },
  { 
    title: "Social Proofing", 
    link: "/social-proofing",
    description: "Elements that leverage social influence to build trust and guide decision-making."
  }
];

// Pre-load components to avoid dynamic imports that can cause update loop issues
const VisualSalience = lazy(() => import('../pages/VisualSalience'));
const Motion = lazy(() => import('../pages/Motion'));
const ProgressBars = lazy(() => import('../pages/ProgressBars'));
const ConversationalInput = lazy(() => import('../pages/ConversationalInput'));
const ThemeToggle = lazy(() => import('../pages/ThemeToggle'));
const SocialProofing = lazy(() => import('../pages/SocialProofing'));

// Map of component paths to their respective components
const componentMap = {
  '/visual-salience': VisualSalience,
  '/motion': Motion,
  '/progress-bars': ProgressBars,
  '/conversational-input': ConversationalInput,
  '/theme-toggle': ThemeToggle,
  '/social-proofing': SocialProofing
};

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(components[0]);
  
  // Get the component based on the selected link
  const ComponentToRender = componentMap[selectedComponent.link];
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Header Section - Centered */}
      <header className="w-full py-10 px-6 bg-background border-b border-border/30 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-3">BeSci x UI</h1>
          <p className="text-muted-foreground text-lg">Behaviourally backed UI components to improve product metrics</p>
        </div>
      </header>
      
      <div className="flex flex-1 w-full p-8 justify-center">
        <Tabs 
          defaultValue={components[0].link} 
          orientation="vertical" 
          className="flex gap-8 max-w-5xl w-full"
          onValueChange={(value) => {
            const component = components.find(c => c.link === value);
            if (component) setSelectedComponent(component);
          }}
        >
          {/* Simplified sidebar without label */}
          <div className="w-56">
            <TabsList className="flex-col rounded-none border-l border-border bg-transparent p-0">
              {components.map((component, index) => {
                const pastelBg = [
                  "hover:bg-[#F2FCE2]", // soft green
                  "hover:bg-[#FEF7CD]", // soft yellow
                  "hover:bg-[#FEC6A1]", // soft orange
                  "hover:bg-[#E5DEFF]", // soft purple
                  "hover:bg-[#FFDEE2]", // soft pink
                  "hover:bg-[#D3E4FD]", // soft blue
                ][index % 6];

                return (
                  <TabsTrigger
                    key={component.link}
                    value={component.link}
                    className={`relative w-full justify-start rounded-none py-4 transition-colors dark:hover:bg-white/5 ${pastelBg} after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary`}
                  >
                    {component.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Simplified component view area - no duplicated titles */}
          <div className="flex-1">
            <div className="h-full flex items-center justify-center">
              <Suspense fallback={
                <div className="animate-pulse p-12 flex items-center justify-center rounded-lg border border-border/30">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4"></div>
                    <p className="text-muted-foreground">Loading component...</p>
                  </div>
                </div>
              }>
                {ComponentToRender && <ComponentToRender simplifiedView={true} />}
              </Suspense>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default MainLayout;
