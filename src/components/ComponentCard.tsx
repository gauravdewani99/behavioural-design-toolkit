
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ComponentCardProps {
  title: string;
  imageUrl: string;
  empty?: boolean;
  index: number;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, imageUrl, empty = false, index }) => {
  // Add a slight delay for staggered animation
  const animationDelay = `${index * 0.1}s`;

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-border glass-morphism h-full ${!empty ? 'bg-secondary/20' : 'bg-secondary/10'}`} 
          style={{ animationDelay }}>
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          {!empty ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/5">
              <p className="text-muted-foreground">Coming soon</p>
            </div>
          )}
        </div>
        <div className="p-5 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
