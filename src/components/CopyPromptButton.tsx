
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
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
      <Button
        variant="primary"
        size="sm"
        className={`absolute top-2 right-2 z-10 bg-blue-500 hover:bg-blue-600 text-white ${className}`}
        onClick={() => setIsDialogOpen(true)}
      >
        AI prompt
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>AI Prompt</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[50vh] p-4 border rounded bg-secondary/20">
            <pre className="whitespace-pre-wrap text-sm">{prompt}</pre>
          </div>
          <DialogFooter>
            <Button onClick={handleCopy} className="mt-2 bg-blue-500 hover:bg-blue-600">
              Copy AI prompt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
