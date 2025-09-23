
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="py-6 md:py-10 lg:py-16 px-4 md:px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gradient">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
