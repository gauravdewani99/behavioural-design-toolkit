
import React from "react";
import { ArrowLeft } from "lucide-react";
import { AvatarSocialProof } from "@/components/AvatarSocialProof";

interface SocialProofingProps {
  simplifiedView?: boolean;
}

const SocialProofing: React.FC<SocialProofingProps> = ({ simplifiedView = false }) => {
  if (simplifiedView) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-secondary/20 rounded-lg p-6 glass-morphism">
          <AvatarSocialProof />
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
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Social Proofing</h1>
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-muted-foreground text-lg">
            Social proofing is a powerful psychological phenomenon where people follow the actions 
            of others, assuming those actions reflect correct behavior. This component demonstrates 
            a simple yet effective social proof element showing user adoption.
          </p>
        </div>
        
        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl font-medium">Basic Social Proof</h2>
            <AvatarSocialProof />
          </div>
        </div>

        <div className="bg-secondary/20 rounded-lg p-8 mb-10 glass-morphism">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-xl font-medium">Enhanced Social Proof</h2>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 rounded-lg border border-border p-4 w-full max-w-2xl">
              <AvatarSocialProof />
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Join them now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofing;
