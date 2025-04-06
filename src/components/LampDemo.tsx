
"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { ExternalLink } from "lucide-react";

export function LampDemo() {
  const textControls = useAnimationControls();
  const tubeLightControls = useAnimationControls();
  
  useEffect(() => {
    // Function to reset the animation
    const resetAnimation = () => {
      // Reset text to initial state
      textControls.set({ opacity: 0.5, y: 100 });
      // Then animate text to the final state
      textControls.start({ opacity: 1, y: 0 });
      
      // Reset tube light animations
      tubeLightControls.set({ width: "15rem", opacity: 0.5 });
      tubeLightControls.start({ width: "30rem", opacity: 1 });
    };
    
    // Initial animation
    resetAnimation();
    
    // Set up interval to reset animation every 5 seconds (changed from 10 seconds)
    const intervalId = setInterval(() => {
      resetAnimation();
    }, 5000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [textControls, tubeLightControls]);

  return (
    <>
      <div className="mb-6 text-base text-muted-foreground leading-relaxed">
        <p>
          Our attention is attracted to visually salient stimuli. (
          <a 
            href="http://www.scholarpedia.org/article/Visual_salience" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary inline-flex items-center hover:underline"
          >
            Itti, L. (2007). Visual salience. Scholarpedia, 2(9), 3327
            <ExternalLink className="h-3 w-3 ml-0.5" />
          </a>
          ) The Spotlight Text component makes your message stand out by giving it motion and putting it right under the limelight.
        </p>
      </div>
      <LampContainer tubeLightControls={tubeLightControls}>
        <motion.h1
          animate={textControls}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>
    </>
  );
}
