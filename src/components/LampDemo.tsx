
"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

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
  );
}
