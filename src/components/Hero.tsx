
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="py-20 md:py-28 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gradient">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
