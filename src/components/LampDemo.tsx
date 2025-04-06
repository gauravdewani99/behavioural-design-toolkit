
"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Input } from "@/components/ui/input";

export function LampDemo() {
  const textControls = useAnimationControls();
  const tubeLightControls = useAnimationControls();
  const [text, setText] = useState("Build lamps \nthe right way");
  
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

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="mb-8 w-full max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Type something here..."
          value={text}
          onChange={handleTextChange}
          className="bg-transparent border border-slate-800/30 backdrop-blur-sm focus:border-slate-700 text-slate-300 placeholder:text-slate-500"
        />
        <p className="text-xs text-slate-500 mt-2">Press Enter or wait for the animation to refresh</p>
      </div>
      
      <div className="mt-12">
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
            {text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < text.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>
        </LampContainer>
      </div>
    </div>
  );
}
