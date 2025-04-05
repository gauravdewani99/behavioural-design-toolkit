
"use client";
import React from "react";
import AnimatedWordCycle from "@/components/ui/animated-text-cycle";

export function AnimatedCycleDemo() {
  // Words to cycle through in the demonstration
  const words = [
    "Engaging",
    "Dynamic", 
    "Attention-grabbing", 
    "Memorable", 
    "Impactful"
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        Create{" "}
        <AnimatedWordCycle 
          words={words} 
          interval={3000} 
          className="text-primary" 
        />{" "}
        experiences
      </h2>

      <p className="max-w-lg text-center text-muted-foreground mt-8">
        Word cycling animations create visual interest and allow you to display multiple messages
        in the same space. Perfect for highlighting features, benefits, or use cases.
      </p>

      <div className="grid gap-6 mt-12 text-center max-w-3xl">
        <div className="p-6 rounded-lg bg-background/40 backdrop-blur">
          <p className="text-xl">
            Our solution is{" "}
            <AnimatedWordCycle 
              words={["fast", "reliable", "secure", "scalable", "intuitive"]} 
              interval={2000}
              className="text-primary italic" 
            />
          </p>
        </div>

        <div className="p-6 rounded-lg bg-background/40 backdrop-blur">
          <p className="text-xl">
            <AnimatedWordCycle 
              words={["Developers", "Designers", "Marketers", "Product managers", "Entrepreneurs"]} 
              interval={2500}
              className="text-primary" 
            />{" "}
            love our platform
          </p>
        </div>
      </div>
    </div>
  );
}
