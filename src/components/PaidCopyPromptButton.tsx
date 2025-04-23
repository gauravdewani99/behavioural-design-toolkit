
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";
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
import { loadStripe } from "@stripe/stripe-js";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

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
  
  // Check payment status from local storage on component mount
  useEffect(() => {
    const paymentStatus = localStorage.getItem(PAYMENT_STATUS_KEY);
    if (paymentStatus === PRODUCT_ID) {
      setIsPaid(true);
    }
  }, []);

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
      // If already paid, show the prompt dialog directly
      setIsDialogOpen(true);
    } else {
      // If not paid, show the payment confirmation dialog
      setIsPaymentDialogOpen(true);
    }
  };

  const handlePayment = async () => {
    setIsPaymentLoading(true);
    
    try {
      // In a real implementation, this would call your backend to create a Stripe checkout session
      // For this demo, we'll simulate a successful payment
      
      // Stripe checkout would typically look like this:
      /*
      const stripe = await stripePromise;
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: PRODUCT_ID,
        }),
      });
      const session = await response.json();
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      */
      
      // For demo purposes, we'll simulate a successful payment after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store payment status in local storage
      localStorage.setItem(PAYMENT_STATUS_KEY, PRODUCT_ID);
      setIsPaid(true);
      setIsPaymentDialogOpen(false);
      
      toast({
        title: "Payment successful",
        description: "Thank you for your purchase! You can now access the AI prompt.",
      });
      
      // Open the prompt dialog immediately after successful payment
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment failed",
        description: "There was a problem processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPaymentLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="default"
        size="sm"
        className={`absolute top-2 right-2 z-10 bg-[#D3E4FD] hover:bg-[#bfd7fa] text-black ${className}`}
        onClick={handleAIPromptClick}
      >
        <Sparkles className="mr-1 h-4 w-4" />
        AI prompt
      </Button>

      {/* Payment Confirmation Dialog */}
      <AlertDialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Purchase AI Prompt</AlertDialogTitle>
            <AlertDialogDescription>
              This AI prompt costs $5. Would you like to proceed with the payment?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPaymentLoading}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handlePayment} 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? (
                <>
                  <div className="h-4 w-4 mr-2 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                  Processing...
                </>
              ) : (
                "Continue to Payment"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* AI Prompt Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>AI Prompt</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground mb-4">
            This prompt is optimized for most AI code editors.
          </div>
          <div className="overflow-y-auto max-h-[50vh] p-4 border rounded bg-secondary/20">
            <pre className="whitespace-pre-wrap text-sm">{prompt}</pre>
          </div>
          <DialogFooter>
            <Button 
              onClick={handleCopy} 
              className="mt-2 bg-[#D3E4FD] hover:bg-[#bfd7fa] text-black"
            >
              <Sparkles className="mr-1 h-4 w-4" />
              Copy AI prompt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
