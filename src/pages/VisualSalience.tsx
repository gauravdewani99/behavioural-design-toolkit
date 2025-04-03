
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";

const VisualSalience: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link to="/" className="flex items-center text-primary hover:text-primary/80 mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Visual Salience</h1>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Visual salience in UI design refers to the prominence or noticeability of elements. 
            This component demonstrates a word cycling animation that draws attention through 
            subtle motion and creates visual interest.
          </p>
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <AuroraBackgroundDemo />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/10 p-6 rounded-lg glass-morphism">
              <h3 className="text-xl font-semibold mb-3">When to Use</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Hero sections requiring emphasis on multiple features</li>
                <li>Headlines that need to convey multiple related concepts</li>
                <li>When you want to save space but show multiple messages</li>
                <li>For creating visual rhythm and interest in static content</li>
              </ul>
            </div>
            <div className="bg-secondary/10 p-6 rounded-lg glass-morphism">
              <h3 className="text-xl font-semibold mb-3">When to Avoid</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Critical information that must be seen immediately</li>
                <li>When content needs to be scanned quickly</li>
                <li>Mobile interfaces with limited screen space</li>
                <li>Sections requiring extended reading or focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualSalience;
