
import React from "react";
import { ArrowLeft } from "lucide-react";
import { SplineSceneBasic } from "@/components/SplineSceneDemo";

interface MotionProps {
  simplifiedView?: boolean;
}

const Motion: React.FC<MotionProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <SplineSceneBasic />
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
          
          <SplineSceneBasic />
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
