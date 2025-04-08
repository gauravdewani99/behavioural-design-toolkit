import React, { useState, lazy, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const components = [{
  title: "Spotlight Text",
  link: "/visual-salience",
  description: "Techniques to draw attention to key elements through contrast, color, and emphasis.",
  info: "Emphasized or spotlighted text improves visual salience by making specific elements stand out, thereby capturing user attention and facilitating engagement. Studies show that such emphasis techniques guide decision-making by leveraging cognitive biases like the Von Restorff effect."
}, {
  title: "Cycle Loop Text",
  link: "/text-cycle-loop",
  description: "Dynamic text animations that rotate through multiple content options in a limited space.",
  info: "The cycle loop text enhances visual salience by leveraging dynamic contrast and motion to capture attention. Studies show animated content in marketing campaigns can boost click-through rates by up to 35% due to heightened memorability and emotional resonance."
}, {
  title: "3D Motion",
  link: "/motion",
  description: "Animation patterns that guide users and create a sense of orientation and hierarchy.",
  info: "Motion design taps into our neurological attraction to movement, creating visual hierarchy and guiding attention. Research indicates that strategic animation can improve task completion rates by up to 15%."
}, {
  title: "Progress Bar",
  link: "/progress-bars",
  description: "Visual indicators that show completion status and reduce anxiety during waiting periods.",
  info: "Progress indicators leverage the Goal-Gradient Effect, where users accelerate effort as they approach completion. Studies show step indicators can increase form completion rates by up to 40% by making progress visible and attainable."
}, {
  title: "AI Conversational Input",
  link: "/conversational-input",
  description: "Natural language interfaces that make complex interactions more intuitive and engaging.",
  info: "Conversational interfaces utilize our natural inclination for dialogue, reducing cognitive load by up to 30%. Research shows users spend 20% more time engaging with conversational UIs compared to traditional forms."
}, {
  title: "Accessibility Toggle",
  link: "/theme-toggle",
  description: "Controls that allow users to personalize their experience through appearance settings.",
  info: "Theme toggles capitalize on the IKEA effect - users value interfaces they can customize. Studies show personalization options can increase user satisfaction by up to 45% and retention by 15%."
}, {
  title: "Social Proofing",
  link: "/social-proofing",
  description: "Elements that leverage social influence to build trust and guide decision-making.",
  info: "Social proof elements tap into conformity bias, where users rely on others' actions to guide their own. Research indicates social validation increases conversion rates by 15-40% depending on implementation."
}];

const VisualSalience = lazy(() => import('../pages/VisualSalience'));
const TextCycleLoop = lazy(() => import('../pages/TextCycleLoop'));
const Motion = lazy(() => import('../pages/Motion'));
const ProgressBars = lazy(() => import('../pages/ProgressBars'));
const ConversationalInput = lazy(() => import('../pages/ConversationalInput'));
const ThemeToggle = lazy(() => import('../pages/ThemeToggle'));
const SocialProofing = lazy(() => import('../pages/SocialProofing'));

const componentMap = {
  '/visual-salience': VisualSalience,
  '/text-cycle-loop': TextCycleLoop,
  '/motion': Motion,
  '/progress-bars': ProgressBars,
  '/conversational-input': ConversationalInput,
  '/theme-toggle': ThemeToggle,
  '/social-proofing': SocialProofing
};

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children
}) => {
  const [selectedComponent, setSelectedComponent] = useState(components[0]);
  const ComponentToRender = componentMap[selectedComponent.link];
  
  return <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="w-full py-8 px-6 bg-background border-b border-border/30">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              <span className="text-[#F08CAA]">Behavioral Design Toolkit</span>
              <span className="mx-2"></span>
              <span className="text-[#F08CAA]"></span>
              <span className="mx-2"></span>
              <span className="text-[#F08CAA]"></span>
            </h1>
            <p className="text-muted-foreground text-base">Evidence-based UI components with ready-to-use AI prompts for faster, smarter builds.</p>
            <p className="text-muted-foreground text-base">Take the guesswork out of design and predictably improve your product metrics.</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/gaurav-dewani-0a4973167/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-primary hover:underline transition-colors">
              Gaurav Dewani
            </a>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 w-full p-6 md:p-8 justify-center">
        <Tabs defaultValue={components[0].link} orientation="vertical" className="flex gap-6 md:gap-8 max-w-5xl w-full" onValueChange={value => {
        const component = components.find(c => c.link === value);
        if (component) setSelectedComponent(component);
      }}>
          <div className="w-52 md:w-56">
            <TabsList className="flex-col rounded-none border-l border-border bg-transparent p-0">
              {components.map((component, index) => {
              const pastelBg = ["hover:bg-[#F2FCE2]",
              "hover:bg-[#FEF7CD]",
              "hover:bg-[#FEC6A1]",
              "hover:bg-[#E5DEFF]",
              "hover:bg-[#FFDEE2]",
              "hover:bg-[#D3E4FD]"
              ][index % 6];
              return <TabsTrigger key={component.link} value={component.link} className={`relative w-full justify-start rounded-none py-3 transition-colors dark:hover:bg-white/5 ${pastelBg} after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-[#F08CAA]`}>
                    {component.title}
                  </TabsTrigger>;
            })}
            </TabsList>
          </div>

          <div className="flex-1">
            <div className="h-full flex flex-col items-center justify-center">
              {selectedComponent && <div className="bg-background/80 p-4 mb-6 rounded text-sm text-muted-foreground w-full">
                  {selectedComponent.title === "Spotlight Text" ? (
                    <p>
                      Emphasized or spotlighted text improves visual salience by making specific elements stand out, 
                      thereby capturing user attention and facilitating engagement. Studies show that such emphasis 
                      techniques guide decision-making by leveraging cognitive biases like the Von Restorff effect{" "}
                      <a 
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8841630/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>.
                    </p>
                  ) : selectedComponent.title === "Cycle Loop Text" ? (
                    <p>
                      The cycle loop text enhances visual salience by leveraging dynamic contrast and motion to capture 
                      attention. Studies show animated content in marketing campaigns can boost click-through rates by 
                      up to 35% due to heightened memorability and emotional resonance{" "}
                      <a 
                        href="https://link.springer.com/article/10.1007/s11145-017-9769-6" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>{" "}
                      <a 
                        href="https://arxiv.org/abs/1704.05907" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [2]
                      </a>.
                    </p>
                  ) : (
                    <p>{selectedComponent.info}</p>
                  )}
                </div>}
              <Suspense fallback={<div className="animate-pulse p-12 flex items-center justify-center rounded-lg border border-border/30">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4"></div>
                    <p className="text-muted-foreground">Loading component...</p>
                  </div>
                </div>}>
                {ComponentToRender && <div className="w-full flex flex-col items-center justify-center">
                    <ComponentToRender simplifiedView={true} />
                  </div>}
              </Suspense>
            </div>
          </div>
        </Tabs>
      </div>

      <footer className="w-full py-6 px-6 border-t border-border/30 mt-auto">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>
            If you're interested in working together, reach out to me on {" "}
            <a href="https://www.linkedin.com/in/gaurav-dewani-0a4973167/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              LinkedIn
            </a>.
          </p>
        </div>
      </footer>
    </div>;
};

export default MainLayout;
