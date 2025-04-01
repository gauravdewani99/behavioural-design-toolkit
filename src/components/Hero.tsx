
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="py-10 md:py-16 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gradient">
          {title}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
