
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
      "relative p-[1px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]",
      isActive && "scale-[1.02] ring-2 ring-primary/20"
    )}>
      <div className="absolute inset-0 z-0">
        <MovingBorder duration={3000 + index * 500} rx="30%" ry="30%">
          <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--primary)_40%,transparent_60%)]" />
        </MovingBorder>
      </div>
      
      <Card className={cn(
        "relative h-24 overflow-hidden border border-border glass-morphism",
        "bg-gradient-to-br dark:from-slate-800 dark:to-slate-900",
        isActive && "border-primary/50"
      )}>
        <CardContent className="p-4 flex flex-col items-center justify-center h-full">
          <div className={cn(
            "absolute inset-0 opacity-80 bg-gradient-to-br",
            pastelGradient,
            "dark:opacity-30"
          )} />
          
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-md font-semibold text-center">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentCard;
