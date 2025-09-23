
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MovingBorder } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  title: string;
  index: number;
  isActive?: boolean;
}

// Pastel colors for the backgrounds
const pastels = [
  "from-[#F2FCE2] to-[#E5FCCD]", // soft green
  "from-[#FEF7CD] to-[#FAEDB2]", // soft yellow
  "from-[#FEC6A1] to-[#FDB588]", // soft orange
  "from-[#E5DEFF] to-[#D1C6FF]", // soft purple
  "from-[#FFDEE2] to-[#FFCCD3]", // soft pink
  "from-[#D3E4FD] to-[#BAD5FC]", // soft blue
];

const ComponentCard: React.FC<ComponentCardProps> = ({ title, index, isActive = false }) => {
  // Get a pastel color for this card (cycling through the array)
  const pastelGradient = pastels[index % pastels.length];
  
  return (
    <div className={cn(
      "relative p-[1px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] w-full",
      isActive && "scale-[1.02] ring-2 ring-primary/20"
    )}>
      <div className="absolute inset-0 z-0">
        <MovingBorder duration={3000 + index * 500} rx="30%" ry="30%">
          <div className="h-16 w-16 md:h-20 md:w-20 opacity-[0.8] bg-[radial-gradient(var(--primary)_40%,transparent_60%)]" />
        </MovingBorder>
      </div>
      
      <Card className={cn(
        "relative h-12 md:h-14 lg:h-16 overflow-hidden border border-border glass-morphism w-full", 
        "bg-gradient-to-br dark:from-slate-800 dark:to-slate-900",
        isActive && "border-primary/50"
      )}>
        <CardContent className="p-2 md:p-3 flex flex-col items-center justify-center h-full">
          <div className={cn(
            "absolute inset-0 opacity-80 bg-gradient-to-br",
            pastelGradient,
            "dark:opacity-30"
          )} />
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <h3 className="text-xs sm:text-sm md:text-base font-medium text-center truncate w-full px-1">
              {title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentCard;
