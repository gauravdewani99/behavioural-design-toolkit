
"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  const controls = useAnimationControls();
  
  useEffect(() => {
    // Function to reset the animation
    const resetAnimation = () => {
      // Reset to initial state
      controls.set({ opacity: 0.5, y: 100 });
      // Then animate to the final state
      controls.start({ opacity: 1, y: 0 });
    };
    
    // Initial animation
    resetAnimation();
    
    // Set up interval to reset animation every 10 seconds
    const intervalId = setInterval(() => {
      resetAnimation();
    }, 10000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <LampContainer>
      <motion.h1
        animate={controls}
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
