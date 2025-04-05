
import React, { useState } from "react";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { ArrowLeft } from "lucide-react";
import { LampDemo } from "@/components/LampDemo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedCycleDemo } from "@/components/AnimatedCycleDemo";

interface VisualSalienceProps {
  simplifiedView?: boolean;
}

const VisualSalience: React.FC<VisualSalienceProps> = ({
  simplifiedView = false
}) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <Tabs defaultValue="spotlight" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="spotlight">Spotlight Text</TabsTrigger>
            <TabsTrigger value="cycle">Cycle Text</TabsTrigger>
          </TabsList>
          
          <TabsContent value="spotlight" className="mt-0">
            <div className="bg-secondary/20 rounded-lg p-4 glass-morphism">
              <div className="max-h-[80vh] overflow-auto">
                <LampDemo />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cycle" className="mt-0">
            <div className="bg-secondary/20 rounded-lg p-8 glass-morphism">
              <AnimatedCycleDemo />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 bg-secondary/20 rounded-lg p-8 glass-morphism">
          <AuroraBackgroundDemo />
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Visual Salience</h1>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Visual salience in UI design refers to the prominence or noticeability of elements. 
            These components demonstrate animations that draw attention through 
            subtle motion and create visual interest.
          </p>
        </div>
        
        <div className="grid gap-10">
          <Tabs defaultValue="spotlight" className="w-full">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-6">
              <TabsTrigger value="spotlight">Spotlight Text</TabsTrigger>
              <TabsTrigger value="cycle">Cycle Text</TabsTrigger>
            </TabsList>
            
            <TabsContent value="spotlight" className="mt-0">
              <div className="bg-secondary/20 rounded-lg p-8 glass-morphism">
                <div className="flex flex-col gap-6">
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
                    Our attention is attracted to visually salient stimuli. [Itti, L. (2007). Visual salience. Scholarpedia, 2(9), 3327.]. 
                    Digital ecosystems are a constant fight for attention. Reduce drop offs and increase conversion rates by emphasizing your textual callouts!
                  </p>
                  <div className="max-h-[80vh] overflow-auto">
                    <LampDemo />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cycle" className="mt-0">
              <div className="bg-secondary/20 rounded-lg p-8 glass-morphism">
                <div className="flex flex-col gap-6">
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
                    Animated word cycling captures attention through movement and constantly refreshed content. Use it to showcase multiple features or benefits without requiring additional space.
                  </p>
                  <AnimatedCycleDemo />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-secondary/20 rounded-lg p-8 glass-morphism h-auto">
            <AuroraBackgroundDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualSalience;
