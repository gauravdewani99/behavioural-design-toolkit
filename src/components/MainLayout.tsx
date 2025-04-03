
import React, { useState, lazy, Suspense } from 'react';
import { 
  Eye, 
  Sparkle, 
  BarChart3, 
  MessageSquare, 
  SunMoon, 
  Users 
} from 'lucide-react';
import { Dock, DockItem, DockIcon, DockLabel } from "@/components/ui/dock";
import { motion } from 'framer-motion';

// Component definitions with descriptions
const components = [
  { 
    title: "Visual Salience", 
    link: "/visual-salience",
    description: "Techniques to draw attention to key elements through contrast, color, and emphasis.",
    icon: Sparkle
  },
  { 
    title: "Motion", 
    link: "/motion",
    description: "Animation patterns that guide users and create a sense of orientation and hierarchy.",
    icon: Eye
  },
  { 
    title: "Progress Bars", 
    link: "/progress-bars",
    description: "Visual indicators that show completion status and reduce anxiety during waiting periods.",
    icon: BarChart3
  },
  { 
    title: "Conversational Input", 
    link: "/conversational-input",
    description: "Natural language interfaces that make complex interactions more intuitive and engaging.",
    icon: MessageSquare
  },
  { 
    title: "Theme Toggle", 
    link: "/theme-toggle",
    description: "Controls that allow users to personalize their experience through appearance settings.",
    icon: SunMoon
  },
  { 
    title: "Social Proofing", 
    link: "/social-proofing",
    description: "Elements that leverage social influence to build trust and guide decision-making.",
    icon: Users
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
      
      {/* Dock Menu - Horizontal */}
      <div className="flex justify-center mt-8 mb-4">
        <div className="max-w-4xl w-full">
          <Dock className="bg-secondary/20 backdrop-blur-sm border border-border glass-morphism">
            {components.map((component, index) => {
              const Icon = component.icon;
              const pastelBg = [
                "bg-[#F2FCE2]", // soft green
                "bg-[#FEF7CD]", // soft yellow
                "bg-[#FEC6A1]", // soft orange
                "bg-[#E5DEFF]", // soft purple
                "bg-[#FFDEE2]", // soft pink
                "bg-[#D3E4FD]", // soft blue
              ][index % 6];
              
              const isSelected = selectedComponent.link === component.link;
              
              return (
                <DockItem
                  key={component.link}
                  className={`rounded-full ${pastelBg} ${isSelected ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setSelectedComponent(component)}
                >
                  <DockLabel>{component.title}</DockLabel>
                  <DockIcon>
                    <Icon className="h-full w-full text-foreground/70" />
                  </DockIcon>
                </DockItem>
              );
            })}
          </Dock>
        </div>
      </div>

      {/* Component View Area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <motion.div 
          className="h-full w-full max-w-4xl flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default MainLayout;
