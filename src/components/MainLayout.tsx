
import React, { useState } from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarProvider
} from "@/components/ui/sidebar";
import ComponentCard from './ComponentCard';

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
      <div className="flex w-full min-h-screen bg-background">
        <Sidebar side="left" variant="sidebar" className="border-r border-border">
          <SidebarContent>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Components</h2>
              <SidebarMenu>
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-2">{selectedComponent.title}</h1>
            <p className="text-muted-foreground mb-8">{selectedComponent.description}</p>
            
            <React.Suspense fallback={<div className="animate-pulse p-12 bg-muted rounded-lg">Loading component...</div>}>
              <ComponentToRender />
            </React.Suspense>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
