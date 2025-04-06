
import React from 'react';
import { Typewriter } from "@/components/ui/typewriter";

interface DescriptionBannerProps {
  descriptions: string[];
}

const DescriptionBanner: React.FC<DescriptionBannerProps> = ({ descriptions }) => {
  return (
    <div className="bg-secondary/10 rounded-xl p-4 max-w-3xl mx-auto text-center mb-6">
      <Typewriter
        text={descriptions}
        speed={50}
        waitTime={1500}
        cursorChar="_"
        className="text-lg text-primary"
      />
    </div>
  );
};

export default DescriptionBanner;
