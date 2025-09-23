
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
  title: "Theme Toggle",
  link: "/theme-toggle",
  description: "Controls that allow users to personalize their experience through appearance settings.",
  info: "Dark mode toggles offer user autonomy and comfort, reducing eye strain and increasing session duration. This customization boosts user satisfaction and retention, leading to improved engagement and product metrics."
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
      <header className="w-full py-4 md:py-6 lg:py-8 px-4 md:px-6 bg-background border-b border-border/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2">
              <span className="text-[#F08CAA]">
                <span className="block sm:inline">Behavioural Design</span>
                <span className="block sm:inline sm:ml-1">Toolkit</span>
              </span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Evidence-based UI components with ready-to-use AI prompts for faster, smarter builds.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Take the guesswork out of design and predictably improve your product metrics.
            </p>
          </div>
          <div className="text-center md:text-right">
            <a href="https://www.linkedin.com/in/gaurav-dewani-0a4973167/" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl font-medium hover:text-primary hover:underline transition-colors">
              Gaurav Dewani
            </a>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 w-full p-4 md:p-6 lg:p-8 justify-center">
        <Tabs defaultValue={components[0].link} orientation="vertical" className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 max-w-5xl w-full" onValueChange={value => {
        const component = components.find(c => c.link === value);
        if (component) setSelectedComponent(component);
      }}>
          {/* Mobile: Horizontal scrolling tabs */}
          <div className="lg:hidden w-full">
            <TabsList className="flex overflow-x-auto gap-2 p-2 bg-muted/50 rounded-lg scrollbar-hide">
              {components.map((component, index) => {
              const pastelBg = ["hover:bg-[#F2FCE2]",
              "hover:bg-[#FEF7CD]",
              "hover:bg-[#FEC6A1]",
              "hover:bg-[#E5DEFF]",
              "hover:bg-[#FFDEE2]",
              "hover:bg-[#D3E4FD]"
              ][index % 6];
              return <TabsTrigger key={component.link} value={component.link} className={`flex-shrink-0 px-3 py-2 text-xs sm:text-sm whitespace-nowrap rounded-md transition-colors dark:hover:bg-white/5 ${pastelBg} data-[state=active]:bg-[#F08CAA] data-[state=active]:text-white data-[state=active]:shadow-none`}>
                    {component.title}
                  </TabsTrigger>;
            })}
            </TabsList>
          </div>
          
          {/* Desktop: Vertical sidebar */}
          <div className="hidden lg:block w-52 xl:w-56">
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

          <div className="flex-1 w-full">
            <div className="h-full flex flex-col items-center justify-center">
              {selectedComponent && <div className="bg-background/80 p-3 md:p-4 mb-4 md:mb-6 rounded text-xs sm:text-sm text-muted-foreground w-full">
                  {selectedComponent.title === "Spotlight Text" ? (
                    <p className="leading-relaxed">
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
                    <p className="leading-relaxed">
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
                  ) : selectedComponent.title === "3D Motion" ? (
                    <p className="leading-relaxed">
                      Motion design taps into our neurological attraction to movement, creating visual hierarchy and guiding attention. 
                      Research indicates that strategic animation can improve task completion rates by up to 15%{" "}
                      <a 
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8279254/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>{" "}
                      <a 
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11347423/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [2]
                      </a>.
                    </p>
                  ) : selectedComponent.title === "Progress Bar" ? (
                    <p className="leading-relaxed">
                      Progress indicators leverage the Goal-Gradient Effect, where users accelerate effort as they approach completion. 
                      Studies show step indicators can increase form completion rates by up to 40% by making progress visible and attainable{" "}
                      <a 
                        href="https://journals.sagepub.com/doi/abs/10.1509/jmkr.43.1.39" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>{" "}
                      <a 
                        href="https://ieeexplore.ieee.org/abstract/document/9222360" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [2]
                      </a>.
                    </p>
                  ) : selectedComponent.title === "AI Conversational Input" ? (
                    <p className="leading-relaxed">
                      Conversational interfaces utilize our natural inclination for dialogue, reducing cognitive load by up to 30%. 
                      Research shows users spend 20% more time engaging with conversational UIs compared to traditional forms{" "}
                      <a 
                        href="https://arxiv.org/pdf/2104.03940" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>.
                    </p>
                  ) : selectedComponent.title === "Theme Toggle" ? (
                    <p className="leading-relaxed">
                      Dark mode toggles offer user autonomy and comfort, reducing eye strain and increasing session duration. 
                      This customization boosts user satisfaction and retention, leading to improved engagement and product metrics{" "}
                      <a 
                        href="https://socialspacejournal.eu/menu-script/index.php/ssj/article/view/343" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>.
                    </p>
                  ) : selectedComponent.title === "Social Proofing" ? (
                    <p className="leading-relaxed">
                      Social proof elements tap into conformity bias, where users rely on others' actions to guide their own. 
                      Research indicates social validation increases conversion rates by 15-40% depending on implementation{" "}
                      <a 
                        href="https://www.researchgate.net/publication/8902776_Social_Influence_Compliance_and_Conformity" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-primary transition-colors"
                      >
                        [1]
                      </a>.
                    </p>
                  ) : (
                    <p className="leading-relaxed">{selectedComponent.info}</p>
                  )}
                </div>}
              <Suspense fallback={<div className="animate-pulse p-6 md:p-12 flex items-center justify-center rounded-lg border border-border/30">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4"></div>
                    <p className="text-muted-foreground text-sm md:text-base">Loading component...</p>
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

      <footer className="w-full py-4 md:py-6 px-4 md:px-6 border-t border-border/30 mt-auto">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p className="text-sm md:text-base">
            <span className="hidden sm:inline">If you're interested in working together, reach out to me on </span>
            <span className="sm:hidden">Reach out on </span>
            <a href="https://www.linkedin.com/in/gaurav-dewani-0a4973167/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              LinkedIn
            </a><span className="hidden sm:inline">.</span>
          </p>
        </div>
      </footer>
    </div>;
};

export default MainLayout;
