
"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface CopyPromptButtonProps {
  prompt: string;
  previewText?: string;
  className?: string;
}

export function CopyPromptButton({ 
  prompt, 
  previewText = "Copy the AI prompt used to create this component", 
  className = "" 
}: CopyPromptButtonProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      toast({
        title: "Prompt copied",
        description: "The AI prompt has been copied to the clipboard.",
      });
    }).catch(err => {
      console.error("Failed to copy: ", err);
      toast({
        title: "Copy failed",
        description: "Failed to copy prompt to clipboard.",
        variant: "destructive",
      });
    });
  };

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-2 right-2 z-10 h-8 w-8 p-0 ${className}`}
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy AI Prompt</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="max-w-xs p-2 text-xs">
          <p>{previewText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
