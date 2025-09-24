"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Copy, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { useLocation } from "react-router-dom";

interface PaidCopyPromptButtonProps {
  prompt: string;
  previewText?: string;
  className?: string;
}

const PAYMENT_STATUS_KEY = "prompt_payment_status";
const PRODUCT_ID = "ai_prompt_3d_motion";

export function PaidCopyPromptButton({ 
  prompt, 
  previewText = "Copy the AI prompt used to create this component", 
  className = "" 
}: PaidCopyPromptButtonProps) {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const paymentStatus = localStorage.getItem(PAYMENT_STATUS_KEY);
    const shouldOpen = location.state?.openPrompt;
    
    if (paymentStatus === PRODUCT_ID) {
      setIsPaid(true);
      if (shouldOpen) {
        setIsDialogOpen(true);
      }
    }
  }, [location.state]);

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

  const handleAIPromptClick = () => {
    if (isPaid) {
      setIsDialogOpen(true);
    } else {
      setIsPaymentDialogOpen(true);
    }
  };

  const handlePayment = async () => {
    setIsPaymentLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout');
      
      if (error) {
        throw error;
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: "There was a problem processing your payment. Please try again.",
        variant: "destructive",
      });
      setIsPaymentLoading(false);
    }
  };

  return (
    <>
      <div className="group relative">
        <Button
          variant="ghost"
          size="sm"
          className={`
            absolute top-3 right-3 z-20 
            liquid-button dark:liquid-button-dark
            text-slate-700 dark:text-slate-200 
            font-medium tracking-wide
            group-hover:text-slate-900 dark:group-hover:text-white
            min-w-fit max-w-[140px] h-auto
            ${className}
          `}
          onClick={handleAIPromptClick}
        >
          <div className="flex items-center gap-1.5 px-1">
            {isPaid ? (
              <>
                <Zap className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-medium truncate">AI Prompt</span>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 flex-shrink-0">
                  Premium
                </Badge>
              </>
            ) : (
              <>
                <Star className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-medium truncate">AI Prompt</span>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 flex-shrink-0">
                  $5
                </Badge>
              </>
            )}
          </div>
        </Button>
      </div>

      <AlertDialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <AlertDialogContent className="liquid-modal dark:liquid-modal-dark border-0 shadow-2xl max-w-md">
          <AlertDialogHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-400/20 dark:from-amber-500/20 dark:to-orange-500/20">
                <Star className="h-8 w-8 text-amber-500" />
              </div>
            </div>
            <AlertDialogTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Unlock Premium AI Prompt
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Get access to the complete, optimized AI prompt that was used to create this component. 
              Perfect for customizing and building similar interactions.
            </AlertDialogDescription>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-2xl font-bold py-2 px-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 border-amber-200 dark:border-amber-800">
                $5
              </Badge>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col gap-3 sm:flex-col">
            <AlertDialogAction 
              onClick={handlePayment} 
              className="w-full py-3 font-semibold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Continue to Payment</span>
                </div>
              )}
            </AlertDialogAction>
            <AlertDialogCancel 
              disabled={isPaymentLoading}
              className="w-full bg-transparent border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              Maybe Later
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="liquid-modal dark:liquid-modal-dark border-0 shadow-2xl max-w-3xl max-h-[85vh]">
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-emerald-400/20 to-blue-400/20 dark:from-emerald-500/20 dark:to-blue-500/20">
                <Sparkles className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <DialogTitle className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Premium AI Prompt
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
              className="w-full py-3 font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Copy className="mr-2 h-5 w-5" />
              Copy to Clipboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
