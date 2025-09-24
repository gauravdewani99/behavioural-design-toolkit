
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Copy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      toast({
        title: "Prompt copied",
        description: "Prompt has been copied to the clipboard.",
      });
      setIsDialogOpen(false);
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
    <>
      <div className="group relative">
        <Button
          variant="ghost"
          size="sm"
          className={`
            absolute top-3 right-3 z-10 
            ai-prompt-button dark:ai-prompt-button-dark
            text-slate-800 dark:text-slate-100 
            font-medium tracking-wide text-xs px-2 py-1 h-7
            group-hover:text-slate-900 dark:group-hover:text-white
            ${className}
          `}
          onClick={() => setIsDialogOpen(true)}
        >
          <div className="flex items-center gap-1.5">
            <Zap className="h-3 w-3 text-blue-500" />
            <span className="text-xs">AI</span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Free
            </Badge>
          </div>
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="liquid-modal dark:liquid-modal-dark border-0 shadow-2xl max-w-3xl max-h-[85vh]">
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/20 dark:to-cyan-500/20">
                <Sparkles className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Free AI Prompt
                </DialogTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Optimized for all major AI code editors
                </p>
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="liquid-glass dark:liquid-glass-dark p-6 overflow-y-auto max-h-[50vh]">
              <pre className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                {prompt}
              </pre>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={handleCopy} 
              className="copy-button dark:copy-button-dark w-full py-3 border-0"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy to Clipboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
