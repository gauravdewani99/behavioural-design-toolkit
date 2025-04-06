
import React from 'react';

interface DescriptionBannerProps {
  descriptions: string[];
}

const DescriptionBanner: React.FC<DescriptionBannerProps> = ({ descriptions }) => {
  return (
    <div className="bg-secondary/10 rounded-xl p-4 max-w-3xl mx-auto text-center mb-6">
      <p className="text-lg text-primary">
        {descriptions[0]}
      </p>
    </div>
  );
};

export default DescriptionBanner;
