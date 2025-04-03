
import React, { useState } from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarProvider
} from "@/components/ui/sidebar";
import ComponentCard from './ComponentCard';
import { Separator } from "@/components/ui/separator";

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

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(components[0]);
  
  // Dynamically import the component based on the selected item
  const ComponentToRender = React.lazy(() => {
    // Remove the leading slash and convert to PascalCase
    const componentName = selectedComponent.link.substring(1)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
      
    return import(`../pages/${componentName}`);
  });

  return (
    <SidebarProvider>
      <div className="flex flex-col w-full min-h-screen bg-background">
        {/* Header Section */}
        <header className="w-full py-8 px-6 bg-background border-b border-border/30">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-2">UI Component Library</h1>
            <p className="text-muted-foreground">A collection of modern, interactive UI components for effective interfaces</p>
          </div>
        </header>
        
        <div className="flex flex-1 w-full">
          <Sidebar side="left" variant="sidebar" className="border-r border-border/30">
            <SidebarContent>
              <div className="p-6">
                <h2 className="text-lg font-medium mb-6">Components</h2>
                <SidebarMenu className="space-y-4">
                  {components.map((component, index) => (
                    <SidebarMenuItem key={component.title}>
                      <div 
                        className="w-full cursor-pointer"
                        onClick={() => setSelectedComponent(component)}
                      >
                        <ComponentCard 
                          title={component.title} 
                          index={index} 
                          isActive={selectedComponent.title === component.title}
                        />
                      </div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </div>
            </SidebarContent>
          </Sidebar>

          <div className="flex-1 p-6">
            <div className="max-w-5xl mx-auto pt-4">
              <h2 className="text-2xl font-bold mb-2">{selectedComponent.title}</h2>
              <p className="text-muted-foreground mb-8">{selectedComponent.description}</p>
              <Separator className="mb-8" />
              
              <React.Suspense fallback={
                <div className="animate-pulse p-12 flex items-center justify-center rounded-lg border border-border/30">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4"></div>
                    <p className="text-muted-foreground">Loading component...</p>
                  </div>
                </div>
              }>
                <ComponentToRender />
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
